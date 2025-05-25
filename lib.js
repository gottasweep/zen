(function() {
    function injectStyles(doc) {
        const css = `
            * { box-sizing: border-box; margin: 0; padding: 0 }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: linear-gradient(135deg, #0f0f14 0%, #1a1a24 100%);
                color: #e2e8f0; 
                padding: 16px; 
                user-select: none;
                min-height: 100vh;
            }
            .header { 
                text-align: center; 
                margin-bottom: 24px;
                padding-bottom: 16px;
                border-bottom: 1px solid rgba(99, 102, 241, 0.2);
                background: rgba(15, 23, 42, 0.4);
                backdrop-filter: blur(8px);
                border-radius: 12px;
                padding: 20px;
            }
            .header h1 { 
                font-size: 1.75rem; 
                color: #6366f1;
                font-weight: 600;
                letter-spacing: -0.025em;
                text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
            }
            .container { 
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 16px; 
                width: 100%;
            }
            .section { 
                background: rgba(15, 23, 42, 0.6);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(148, 163, 184, 0.1);
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 16px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                           0 2px 4px -1px rgba(0, 0, 0, 0.06);
                transition: all 0.2s ease;
            }
            .section:hover {
                border-color: rgba(99, 102, 241, 0.3);
                box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.2), 
                           0 4px 10px -2px rgba(0, 0, 0, 0.1);
            }
            .section-title { 
                font-size: 0.875rem; 
                color: #94a3b8;
                text-transform: uppercase; 
                margin-bottom: 16px;
                font-weight: 600;
                letter-spacing: 0.05em;
            }
            label.switch { 
                display: flex; 
                align-items: center;
                justify-content: space-between; 
                cursor: pointer;
                margin-bottom: 12px; 
                font-size: 0.875rem;
                padding: 8px 0;
                transition: color 0.2s ease;
            }
            label.switch:hover {
                color: #f1f5f9;
            }
            .switch input { opacity: 0; width: 0; height: 0 }
            .slider-track { 
                position: relative; 
                display: inline-block;
                width: 100%; 
                margin-bottom: 12px;
            }
            .slider-track input[type=range] { 
                width: 100%;
                height: 6px;
                border-radius: 3px;
                background: rgba(51, 65, 85, 0.8);
                outline: none;
                -webkit-appearance: none;
                appearance: none;
            }
            .slider-track input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                transition: all 0.2s ease;
            }
            .slider-track input[type=range]::-webkit-slider-thumb:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 8px rgba(99, 102, 241, 0.4);
            }
            .slider-track input[type=range]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                cursor: pointer;
                border: none;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            input[type=text],
            input[type=number] { 
                width: 100%; 
                padding: 12px 16px;
                border-radius: 8px; 
                border: 1px solid rgba(51, 65, 85, 0.6);
                background: rgba(15, 23, 42, 0.8);
                color: #e2e8f0;
                font-size: 0.875rem; 
                margin-bottom: 12px;
                transition: all 0.2s ease;
                backdrop-filter: blur(4px);
            }
            input[type=text]:focus,
            input[type=number]:focus {
                outline: none;
                border-color: #6366f1;
                box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                background: rgba(15, 23, 42, 0.9);
            }
            input[type=text]::placeholder,
            input[type=number]::placeholder {
                color: #64748b;
            }
            button { 
                width: 100%; 
                padding: 12px 20px; 
                border: none;
                border-radius: 8px; 
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                color: #fff; 
                cursor: pointer; 
                font-size: 0.875rem;
                font-weight: 500;
                margin-bottom: 12px; 
                transition: all 0.2s ease;
                position: relative;
                overflow: hidden;
            }
            button:before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                transition: left 0.5s;
            }
            button:hover {
                transform: translateY(-1px);
                box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
            }
            button:hover:before {
                left: 100%;
            }
            button:active {
                transform: translateY(0);
            }
            .slider {
                position: relative;
                display: inline-block;
                width: 44px;
                height: 24px;
                background-color: rgba(51, 65, 85, 0.8);
                border-radius: 24px;
                transition: all 0.3s ease;
                margin-left: 8px;
                box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .slider:before {
                content: "";
                position: absolute;
                height: 20px;
                width: 20px;
                left: 2px;
                bottom: 2px;
                background: linear-gradient(135deg, #f8fafc, #e2e8f0);
                border-radius: 50%;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            input:checked + .slider {
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                box-shadow: inset 0 2px 4px rgba(99, 102, 241, 0.2);
            }
            input:checked + .slider:before {
                transform: translateX(20px);
                background: linear-gradient(135deg, #ffffff, #f1f5f9);
            }
            .popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(4px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.2s ease;
            }
            .popup-box {
                background: rgba(15, 23, 42, 0.95);
                backdrop-filter: blur(16px);
                border: 1px solid rgba(99, 102, 241, 0.3);
                padding: 24px;
                max-width: 320px;
                width: 90%;
                color: #e2e8f0;
                border-radius: 16px;
                text-align: center;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 
                           0 10px 10px -5px rgba(0, 0, 0, 0.2);
                animation: slideIn 0.3s ease;
            }
            .popup-buttons {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                gap: 12px;
            }
            .popup-buttons button {
                width: auto;
                padding: 10px 20px;
                margin-bottom: 0;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(-20px) scale(0.9);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `
        const s = doc.createElement('style')
        s.textContent = css
        doc.head.appendChild(s)
    }

    function init(opts) {
        if (opts.startupAudio) new Audio(opts.startupAudio).play()
        const win = window.open('', '', opts.features)
        const doc = win.document
        doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>')
        injectStyles(doc)
        const header = doc.createElement('div')
        header.className = 'header'
        const title = doc.createElement('h1')
        title.textContent = opts.title
        header.appendChild(title)
        doc.body.appendChild(header)
        const container = doc.createElement('div')
        container.className = 'container'
        doc.body.appendChild(container)

        function addSection(label) {
            const sec = doc.createElement('div')
            sec.className = 'section'
            const t = doc.createElement('div')
            t.className = 'section-title'
            t.textContent = label
            sec.appendChild(t)
            container.appendChild(sec)
            return sec
        }

        function ensureActionSection() {
            if (!actionSec) actionSec = addSection('ACTIONS')
            return actionSec
        }

        let actionSec

        function addButton(id, text, onClick) {
            const btn = doc.createElement('button')
            btn.id = id
            btn.textContent = text
            btn.onclick = onClick
            ensureActionSection().appendChild(btn)
            return btn
        }

        function addInput(id, placeholder) {
            const inp = doc.createElement('input')
            inp.type = 'text'
            inp.id = id
            inp.placeholder = placeholder
            ensureActionSection().appendChild(inp)
            return inp
        }

        function addNumberInput(id, placeholder, min, max, step) {
            const inp = doc.createElement('input')
            inp.type = 'number'
            inp.id = id
            inp.placeholder = placeholder
            if (min !== undefined) inp.min = min
            if (max !== undefined) inp.max = max
            if (step !== undefined) inp.step = step
            ensureActionSection().appendChild(inp)
            return inp
        }

        function addSlider(id, min, max, step, onInput) {
            const wrapper = doc.createElement('div')
            wrapper.className = 'slider-track'
            const inp = doc.createElement('input')
            inp.type = 'range'
            inp.id = id
            inp.min = min
            inp.max = max
            inp.step = step
            inp.oninput = onInput
            wrapper.appendChild(inp)
            ensureActionSection().appendChild(wrapper)
            return inp
        }

        function addToggle(id, labelText, onChange) {
            const wrapper = doc.createElement('label')
            wrapper.className = 'switch'
            const span = doc.createElement('span')
            span.textContent = labelText
            span.style.flex = '1'
            const input = doc.createElement('input')
            input.type = 'checkbox'
            input.id = id
            input.onchange = onChange
            const slider = doc.createElement('span')
            slider.className = 'slider'
            wrapper.appendChild(span)
            wrapper.appendChild(input)
            wrapper.appendChild(slider)
            ensureActionSection().appendChild(wrapper)
            return input
        }

        function showPopup(message, buttons) {
            const overlay = doc.createElement('div')
            overlay.className = 'popup-overlay'
            const box = doc.createElement('div')
            box.className = 'popup-box'
            const msg = doc.createElement('div')
            msg.textContent = message
            box.appendChild(msg)
            const btnContainer = doc.createElement('div')
            btnContainer.className = 'popup-buttons'

            buttons.forEach(btn => {
                const b = doc.createElement('button')
                b.textContent = btn.text
                b.onclick = () => {
                    if (btn.onClick) btn.onClick()
                    doc.body.removeChild(overlay)
                }
                btnContainer.appendChild(b)
            })

            box.appendChild(btnContainer)
            overlay.appendChild(box)
            doc.body.appendChild(overlay)
        }

        function alertBox(message, onOk) {
            showPopup(message, [
                { text: 'OK', onClick: onOk }
            ])
        }

        function confirmBox(message, onYes, onNo) {
            showPopup(message, [
                { text: 'Yes', onClick: onYes },
                { text: 'No', onClick: onNo }
            ])
        }

        return {
            addSection,
            addButton,
            addInput,
            addNumberInput,
            addSlider,
            addToggle,
            alertBox,
            confirmBox
        }
    }

    window.Zen = { init }
})()
