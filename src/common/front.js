const store = {
  indexShow: 0,
  contextFront: [],
};

function togglePartialViewOfContextFront(HTMLElement, toggle) {
  if (!HTMLElement.textContent) return;
  const regex = /\(.*?\)/g;

  if (toggle === true) {
    const result = HTMLElement.innerHTML.replace(regex, function (match) {
      const shiftedElement = store.contextFront.shift();

      return shiftedElement;
    });
    HTMLElement.innerHTML = result;

    return;
  } else if (toggle === false) {
    const result = HTMLElement.innerHTML.replace(regex, function (match) {
      store.contextFront.push(match);
      return "(...)";
    });
    HTMLElement.innerHTML = result;

    return;
  }

  throw Error("toggle is not Boolean");
}

function replaceTextWithTable(element) {
  if (!element) {
    return;
  }

  const content = element.textContent.trim();
  if (!content) return;

  const parts = content.split(',');

  if (parts.length !== 3) {
    throw new Error("Содержимое элемента должно быть разделено на три части.");
  }

  element.innerHTML = `
        <table>
          <tr>
            <td>${parts[0]}</td>
            <td>${parts[1]}</td>
            <td>${parts[2]}</td>
          </tr>
        </table>
    `;
}

function show(HTMLElement, isNotice) {
  if (!HTMLElement) {
    return;
  }

  const tagName = HTMLElement.tagName.toLowerCase();
  const prevTagName = HTMLElement.parentElement.tagName.toLowerCase();

  HTMLElement.style.boxShadow = "none";
  HTMLElement.style.color = "inherit";
  if (isNotice && prevTagName !== "td") {
    HTMLElement.style.textDecoration = "orange underline";
  }
}

function showError(error) {
  const HTMLElementDialog = document.querySelector("dialog");
  HTMLElementDialog.textContent = String(error);
  HTMLElementDialog.setAttribute('open', 'true');
  document.body.style.backgroundColor = 'red';
}