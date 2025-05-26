(function(){
    // this is all so holy fucking skidded
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Zen</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
:root{--bg-primary:#0a0a0a;--bg-secondary:#1a1a1a;--bg-tertiary:#2a2a2a;--text-primary:#ffffff;--text-secondary:#a0a0a0;--accent:#b648b2;--accent-hover:#982e9d;--success:#b648b2;--danger:#ef4444;--border:#333333;--shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);--shadow-lg:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}*{box-sizing:border-box;margin:0;padding:0}body{background:linear-gradient(135deg,var(--bg-primary) 0%,var(--bg-secondary) 100%);color:var(--text-primary);font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;height:100vh;display:flex;flex-direction:column;overflow:hidden}.header{background:var(--bg-secondary);backdrop-filter:blur(10px);padding:16px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);box-shadow:var(--shadow);position:relative}.header::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--success),var(--accent))}.header-left{display:flex;align-items:center;gap:12px}.logo{width:32px;height:32px;background:transparent;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;overflow:hidden}.header h1{font-size:18px;font-weight:600;color:var(--text-primary);margin:0}.header-right{display:flex;align-items:center;gap:8px}.status{padding:4px 8px;background:var(--bg-tertiary);border-radius:12px;font-size:12px;color:var(--text-secondary);font-family:'JetBrains Mono',monospace}.close-btn{background:transparent;border:none;color:var(--text-secondary);font-size:18px;cursor:pointer;padding:8px;border-radius:6px;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center}.close-btn:hover{background:var(--danger);color:white;transform:scale(1.05)}.editor-container{flex:1;display:flex;flex-direction:column;position:relative;overflow:auto;min-height:0;}.editor-wrapper{flex:1;position:relative;background:var(--bg-primary)}.toolbar{position:sticky;bottom:0;z-index:10;background:var(--bg-secondary);padding:12px 24px;display:flex;gap:12px;align-items:center;border-top:1px solid var(--border);box-shadow:0 -2px 8px rgba(0,0,0,0.1)}.btn{background:var(--bg-tertiary);border:1px solid var(--border);color:var(--text-primary);padding:8px 16px;border-radius:8px;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;transition:all 0.2s ease;display:flex;align-items:center;gap:8px;position:relative;overflow:hidden}.btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);transition:left 0.5s ease}.btn:hover::before{left:100%}.btn:hover{border-color:var(--accent);background:var(--accent);color:white;transform:translateY(-1px);box-shadow:var(--shadow)}.btn-success{background:var(--success);border-color:var(--success);color:white}.btn-success:hover{background:#b648b2;border-color:#b648b2;transform:translateY(-1px);box-shadow:var(--shadow-lg)}.btn-danger{background:transparent;border-color:var(--border);color:var(--text-secondary)}.btn-danger:hover{background:var(--danger);border-color:var(--danger);color:white}.toolbar-divider{width:1px;height:24px;background:var(--border);margin:0 8px}.toolbar-info{margin-left:auto;font-size:12px;color:var(--text-secondary);font-family:'JetBrains Mono',monospace}.CodeMirror{height:100%!important;font-family:'JetBrains Mono','Consolas',monospace!important;font-size:14px!important;line-height:1.6!important;background:var(--bg-primary)!important;color:var(--text-primary)!important}.CodeMirror-gutters{background:var(--bg-secondary)!important;border-right:1px solid var(--border)!important}.CodeMirror-linenumber{color:var(--text-secondary)!important;padding:0 8px!important}.CodeMirror-cursor{border-left:2px solid var(--accent)!important}.CodeMirror-selected{background: rgba(206, 94, 195, 0.2) !important;}.CodeMirror-focused .CodeMirror-selected{background: rgba(206, 94, 195, 0.3) !important;}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:var(--bg-secondary)}::-webkit-scrollbar-thumb{background:var(--bg-tertiary);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--border)}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}.loading{animation:pulse 2s infinite}.logo img{width:100%;height:100%;object-fit:contain;}::selection {background: rgba(206, 94, 195, 0.3);color: white;}::-moz-selection {background: rgba(206, 94, 195, 0.3);color: white;}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/material-darker.min.css">
</head>
<body>
<div class="header">
<div class="header-left">
<div class="logo"><img src="https://raw.githubusercontent.com/gottasweep/zen/refs/heads/main/zen.png"></img></div>
<h1>Zen</h1>
</div>
<div class="header-right">
<div class="status">Ready</div>
<button class="close-btn" id="close">✕</button>
</div>
</div>
<div class="editor-container">
<div class="editor-wrapper">
<textarea id="code"></textarea>
</div>
<div class="toolbar">
<button class="btn btn-success" id="run">▶ Execute</button>
<button class="btn btn-danger" id="clear">🗑 Clear</button>
<div class="toolbar-divider"></div>
<button class="btn" id="format">✨ Format</button>
<div class="toolbar-info">Press Ctrl+Enter to execute</div>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/javascript/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/closebrackets.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/matchbrackets.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/selection/active-line.min.js"></script>
<script>
const editor=CodeMirror.fromTextArea(document.getElementById('code'),{mode:'javascript',theme:'material-darker',lineNumbers:true,autoCloseBrackets:true,matchBrackets:true,styleActiveLine:true,indentUnit:2,tabSize:2,lineWrapping:true,extraKeys:{'Ctrl-Enter':executeCode,'Cmd-Enter':executeCode}});
const status=document.querySelector('.status');
function updateStatus(text,type='default'){status.textContent=text;status.className='status '+type;if(type==='success'||type==='error'){setTimeout(()=>{status.textContent='Ready';status.className='status'},3000)}}
function executeCode(){const code=editor.getValue().trim();if(!code){updateStatus('No code to execute','error');return}try{updateStatus('Executing...','loading');if(window.opener&&!window.opener.closed){window.opener.eval(code);updateStatus('Executed successfully','success')}else{eval(code);updateStatus('Executed in current window','success')}}catch(error){updateStatus('Error: '+error.message,'error');console.error('Execution error:',error)}}
function clearEditor(){if(editor.getValue().trim()&&!confirm('Are you sure you want to clear the editor?')){return}editor.setValue('');editor.focus();updateStatus('Editor cleared','success')}
function formatCode(){const code=editor.getValue();if(!code.trim())return;try{const lines=code.split('\\n');let indentLevel=0;const formatted=lines.map(line=>{const trimmed=line.trim();if(trimmed.includes('}'))indentLevel=Math.max(0,indentLevel-1);const indented='  '.repeat(indentLevel)+trimmed;if(trimmed.includes('{'))indentLevel++;return indented}).join('\\n');editor.setValue(formatted);updateStatus('Code formatted','success')}catch(error){updateStatus('Format failed','error')}}
document.getElementById('run').onclick=executeCode;
document.getElementById('clear').onclick=clearEditor;
document.getElementById('format').onclick=formatCode;
document.getElementById('close').onclick=()=>{if(confirm('Close Zen?')){window.close()}};
editor.focus();
editor.setValue('// Welcome to Zen!\\n// Write your JavaScript code here and click Execute\\n\\nconsole.log(\\'Hello, World!\\')');
</script>
</body>
</html>`;
    const features = 'width=900,height=500,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes';
    const w = window.open('','CodeExecutor',features);
    w.document.write(html);
    w.document.close();
    w.focus();
})()
