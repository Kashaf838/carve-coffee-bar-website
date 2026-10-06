import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types';

interface AudioAmbianceProps {
  lang: Language;
}

export const AudioAmbiance: React.FC<AudioAmbianceProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceNodesRef = useRef<AudioNode[]>([]);

  const startAmbiance = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft warm low-frequency drone (room resonance)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(108, ctx.currentTime); // Gentle warm resonance

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.04, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();

      // Soft subtle filtered noise (coffee steam / gentle room murmur)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.015, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();

      sourceNodesRef.current = [osc, whiteNoise];
      setIsPlaying(true);
    } catch {
      // Audio not supported or blocked
      setIsPlaying(false);
    }
  };

  const stopAmbiance = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          sourceNodesRef.current.forEach((node) => {
            if ('stop' in node && typeof (node as AudioScheduledSourceNode).stop === 'function') {
              (node as AudioScheduledSourceNode).stop();
            }
            node.disconnect();
          });
          sourceNodesRef.current = [];
          audioCtxRef.current?.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 250);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleAmbiance = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbiance();
    };
  }, []);

  return (
    <button
      onClick={toggleAmbiance}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-theme hover:border-theme-hover text-theme-secondary hover:text-theme-primary transition-all bg-theme-subtle shadow-sm"
      title={lang === 'ar' ? 'تشغيل صوت أجواء المقهى' : 'Toggle cafe room ambiance sound'}
      aria-label={lang === 'ar' ? 'تشغيل صوت أجواء المقهى' : 'Toggle cafe room ambiance sound'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-theme-accent animate-pulse" />
          <span className="hidden sm:inline">{lang === 'ar' ? 'الأجواء: تعمل' : 'Sound: On'}</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-theme-muted" />
          <span className="hidden sm:inline">{lang === 'ar' ? 'أجواء كارڤ' : 'Ambiance'}</span>
        </>
      )}
    </button>
  );
};
