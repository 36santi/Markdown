const initialMarkdown = `# Encabezado H1
## Subencabezado H2

[Enlace a FreeCodeCamp](https://www.freecodecamp.org)

Texto en **negrita** y texto en _cursiva_.

Código en línea: \`const x = 5;\`

\`\`\`js
// Bloque de código
function saludo() {
  return "Hola mundo";
}
\`\`\`

- Elemento de lista 1
- Elemento de lista 2

> Esto es una cita en bloque.

![Imagen ejemplo](https://via.placeholder.com/300x100.png?text=Imagen+de+prueba)
`;

marked.setOptions({ breaks: true });

function App() {
  const [md, setMd] = React.useState(initialMarkdown);

  const handleChange = (e) => setMd(e.target.value);

  const getPreview = () => {
    return { __html: marked.parse(md) };
  };

  return (
    <div className="container">
      <header className="header">Markdown Previewer</header>
      <main className="main">
        <section className="editor-panel">
          <div className="panel-title">Editor</div>
          <textarea id="editor" value={md} onChange={handleChange} />
        </section>

        <section className="preview-panel">
          <div className="panel-title">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={getPreview()} />
        </section>
      </main>
      <footer className="footer">Tu previsualizador de Markdown</footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
