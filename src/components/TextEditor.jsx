import './text-editor.css';

export default function TextEditor({ text, onChange }) {
  return (
    <div className="editor-block">
      <label htmlFor="preview-text" className="editor-block__label">النص</label>
      <textarea
        id="preview-text"
        className="editor-block__textarea"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        maxLength={500}
        placeholder="اكتب عبارتك هنا…"
        dir="auto"
      />
      <div className="editor-block__hint">{text.length}/500 حرفًا</div>
    </div>
  );
}
