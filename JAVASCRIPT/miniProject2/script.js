let items = [];
    let editingIndex = -1;

    function renderList() {
      const list = document.getElementById('itemList');
      list.innerHTML = '';
      items.forEach((item, index) => {
        list.innerHTML += `
          <li>
            <span>${item}</span>
            <div class="actions">
              <button onclick="editItem(${index})">Edit</button>
              <button onclick="deleteItem(${index})" style="background:red">Delete</button>
            </div>
          </li>
        `;
      });
    }

    function addItem() {
      const input = document.getElementById('itemInput');
      const value = input.value.trim();
      if (value === '') return alert("Please enter an item");

      if (editingIndex === -1) {
        items.push(value);
      } else {
        items[editingIndex] = value;
        editingIndex = -1;
      }

      input.value = '';
      renderList();
    }

    function editItem(index) {
      const input = document.getElementById('itemInput');
      input.value = items[index];
      editingIndex = index;
    }

    function deleteItem(index) {
      items.splice(index, 1);
      renderList();
    }

    renderList();