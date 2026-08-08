import { nearestWeightName } from '../data/fonts.js';
import './controls-panel.css';

const ALIGN_OPTIONS = [
  { value: 'right', label: 'يمين', icon: '⟶' },
  { value: 'center', label: 'وسط', icon: '↔' },
  { value: 'left', label: 'يسار', icon: '⟵' }
];

export default function ControlsPanel({ state, availableWeights, onChange }) {
  const set = (key) => (value) => onChange({ ...state, [key]: value });

  return (
    <div className="controls">
      <div className="controls__row">
        <label className="controls__label">
          حجم الخط
          <span className="controls__value">{state.fontSize}px</span>
        </label>
        <input
          type="range"
          min={10}
          max={200}
          value={state.fontSize}
          onChange={(e) => set('fontSize')(Number(e.target.value))}
        />
      </div>

      <div className="controls__row">
        <label className="controls__label">وزن الخط</label>
        <div className="controls__chips">
          {availableWeights.map((w) => (
            <button
              key={w}
              className={`chip ${state.weight === w ? 'chip--active' : ''}`}
              onClick={() => set('weight')(w)}
              title={`${w}`}
            >
              {nearestWeightName(w)}
            </button>
          ))}
        </div>
      </div>

      <div className="controls__grid">
        <div className="controls__row">
          <label className="controls__label" htmlFor="text-color">لون النص</label>
          <input id="text-color" type="color" value={state.color} onChange={(e) => set('color')(e.target.value)} />
        </div>
        <div className="controls__row">
          <label className="controls__label" htmlFor="bg-color">لون الخلفية</label>
          <input id="bg-color" type="color" value={state.bgColor} onChange={(e) => set('bgColor')(e.target.value)} />
        </div>
      </div>

      <div className="controls__row">
        <label className="controls__label">محاذاة النص</label>
        <div className="controls__chips">
          {ALIGN_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`chip ${state.align === opt.value ? 'chip--active' : ''}`}
              onClick={() => set('align')(opt.value)}
            >
              <span aria-hidden="true">{opt.icon}</span> {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="controls__grid">
        <div className="controls__row">
          <label className="controls__label">
            تباعد الأحرف
            <span className="controls__value">{state.letterSpacing}px</span>
          </label>
          <input
            type="range" min={-5} max={30} step={0.5}
            value={state.letterSpacing}
            onChange={(e) => set('letterSpacing')(Number(e.target.value))}
          />
        </div>
        <div className="controls__row">
          <label className="controls__label">
            تباعد الأسطر
            <span className="controls__value">{state.lineHeight}</span>
          </label>
          <input
            type="range" min={0.8} max={3} step={0.1}
            value={state.lineHeight}
            onChange={(e) => set('lineHeight')(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
