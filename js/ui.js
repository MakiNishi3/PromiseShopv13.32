const UI = (function () {
  const state = {
    sliders: [],
    booleans: [],
    colors: [],
    enums: []
  };

  function createElement(type, props = {}, children = []) {
    const el = document.createElement(type);
    Object.keys(props).forEach(k => {
      if (k === "style") Object.assign(el.style, props[k]);
      else if (k.startsWith("on")) el.addEventListener(k.substring(2).toLowerCase(), props[k]);
      else el[k] = props[k];
    });
    children.forEach(c => el.appendChild(c));
    return el;
  }

  function panel(title) {
    return createElement("div", {
      style: {
        padding: "10px",
        borderBottom: "1px solid #444",
        color: "#fff",
        fontFamily: "sans-serif"
      }
    }, [createElement("div", { innerText: title })]);
  }

  function slider(name, min, max, value, onChange) {
    const input = createElement("input", {
      type: "range",
      min,
      max,
      value,
      oninput: e => onChange(parseFloat(e.target.value))
    });
    const label = createElement("div", { innerText: name });
    const container = createElement("div", {}, [label, input]);
    state.sliders.push(container);
    return container;
  }

  function boolean(name, value, onChange) {
    const input = createElement("input", {
      type: "checkbox",
      checked: value,
      onchange: e => onChange(e.target.checked)
    });
    const label = createElement("span", { innerText: name });
    const container = createElement("div", {}, [input, label]);
    state.booleans.push(container);
    return container;
  }

  function color(name, value, onChange) {
    const input = createElement("input", {
      type: "color",
      value,
      onchange: e => onChange(e.target.value)
    });
    const label = createElement("span", { innerText: name });
    const container = createElement("div", {}, [label, input]);
    state.colors.push(container);
    return container;
  }

  function enumeration(name, options, value, onChange) {
    const select = createElement("select", {
      onchange: e => onChange(e.target.value)
    });
    options.forEach(opt => {
      const o = createElement("option", {
        value: opt,
        innerText: opt,
        selected: opt === value
      });
      select.appendChild(o);
    });
    const label = createElement("span", { innerText: name });
    const container = createElement("div", {}, [label, select]);
    state.enums.push(container);
    return container;
  }

  function add(container, element) {
    container.appendChild(element);
  }

  function remove(container, element) {
    container.removeChild(element);
  }

  function createUI(root = document.body) {
    const wrapper = createElement("div", {
      style: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "250px",
        height: "100%",
        background: "#222",
        overflow: "auto",
        zIndex: 9999
      }
    });

    const filePanel = panel("File");
    const imagePanel = panel("Image");
    const effectsPanel = panel("Effects");
    const editPanel = panel("Edit");

    wrapper.appendChild(filePanel);
    wrapper.appendChild(imagePanel);
    wrapper.appendChild(effectsPanel);
    wrapper.appendChild(editPanel);

    root.appendChild(wrapper);

    return {
      file: filePanel,
      image: imagePanel,
      effects: effectsPanel,
      edit: editPanel
    };
  }

  return {
    slider,
    boolean,
    color,
    enum: enumeration,
    add,
    remove,
    createUI
  };
})();
