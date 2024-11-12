document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('tbody');
    
    // Función para agregar una nueva fila
    function addRow() {
        const newRow = tableBody.insertRow();
        
        // Crear celdas para la nueva fila
        for (let i = 0; i < 4; i++) { // 4 porque hay 4 celdas en una fila (sin contar los botones)
            const cell = newRow.insertCell();
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Dato';
            cell.appendChild(input);
        }
        
        // Agregar botones para eliminar y agregar nuevas filas
        const addCell = newRow.insertCell();
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('add-row');
        addButton.addEventListener('click', addRow); // Llamar a la misma función de agregar fila
        addCell.appendChild(addButton);

        const removeCell = newRow.insertCell();
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.classList.add('remove-row');
        removeButton.addEventListener('click', () => {
            newRow.remove();
        });
        removeCell.appendChild(removeButton);
    }

    // Función para guardar los datos
    const saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', () => {
        const rows = tableBody.querySelectorAll('tr');
        const data = [];
        
        rows.forEach(row => {
            const rowData = [];
            row.querySelectorAll('td input').forEach(input => {
                rowData.push(input.value); // Obtener el valor de cada input
            });
            data.push(rowData);
        });

        // Aquí puedes hacer algo con los datos, por ejemplo, imprimirlos en consola o enviarlos a un servidor
        console.log('Datos guardados:', data);
    });
});
