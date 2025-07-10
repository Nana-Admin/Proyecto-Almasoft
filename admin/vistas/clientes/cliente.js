<<<<<<< HEAD
<<<<<<< HEAD

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('.contacts-table tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.name-cell').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.title;
        const row = this.closest('tr');
        const name = row.querySelector('.name-cell').textContent;
        
        switch(action) {
            case 'Eliminar':
                if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                    // Animación de eliminación
                    row.style.transform = 'translateX(-100%)';
                    row.style.opacity = '0';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
                break;
                
            case 'Editar':
               
                alert(`Editando contacto: ${name}`);
                break;
                
            case 'Copiar':
                
                navigator.clipboard.writeText(name).then(() => {
                  
                    const originalText = this.textContent;
                    this.textContent = '✓';
                    this.style.color = '#38a169';
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 1000);
                }).catch(() => {
                    alert(`Nombre copiado: ${name}`);
                });
                break;
                
            case 'Buscar':
                
                document.getElementById('searchInput').value = name;
                document.getElementById('searchInput').focus();
                break;
                
            case 'Más opciones':
             
                showOptionsMenu(name, this);
                break;
                
            default:
                alert(`Acción "${action}" para ${name}`);
        }
    });
});


function showOptionsMenu(name, button) {
    const menu = document.createElement('div');
    menu.className = 'options-menu';
    menu.innerHTML = `
        <div class="menu-item" onclick="alert('Ver perfil de ${name}')">Ver perfil</div>
        <div class="menu-item" onclick="alert('Enviar mensaje a ${name}')">Enviar mensaje</div>
        <div class="menu-item" onclick="alert('Llamar a ${name}')">Llamar</div>
        <div class="menu-item" onclick="alert('Compartir contacto de ${name}')">Compartir</div>
    `;
    

    const rect = button.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${rect.bottom + 5}px`;
    menu.style.right = `${window.innerWidth - rect.right}px`;
    menu.style.background = 'white';
    menu.style.border = '1px solid #e0e0e0';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    menu.style.zIndex = '1000';
    menu.style.minWidth = '150px';
    
  
    const style = document.createElement('style');
    style.textContent = `
        .options-menu {
            animation: fadeInScale 0.2s ease-out;
        }
        .menu-item {
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
            font-size: 14px;
        }
        .menu-item:hover {
            background-color: #f5f5f5;
        }
        .menu-item:first-child {
            border-radius: 8px 8px 0 0;
        }
        .menu-item:last-child {
            border-radius: 0 0 8px 8px;
        }
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(menu);
    
  
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && e.target !== button) {
                menu.remove();
                style.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}


function addContact(name) {
    const tbody = document.querySelector('.contacts-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="name-cell">${name}</td>
        <td class="actions-cell">
            <button class="action-button delete-btn" title="Eliminar">🗑️</button>
            <button class="action-button" title="Copiar">📋</button>
            <button class="action-button edit-btn" title="Editar">✏️</button>
            <button class="action-button" title="Buscar">🔍</button>
            <button class="action-button" title="Más opciones">⚙️</button>
        </td>
    `;
    

    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(20px)';
    tbody.appendChild(newRow);
    
   
    setTimeout(() => {
        newRow.style.transition = 'all 0.3s ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
    }, 100);
    
  
    newRow.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.title;
            const row = this.closest('tr');
            const name = row.querySelector('.name-cell').textContent;
            
            switch(action) {
                case 'Eliminar':
                    if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                        row.style.transform = 'translateX(-100%)';
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.remove();
                        }, 300);
                    }
                    break;
                case 'Editar':
                    alert(`Editando contacto: ${name}`);
                    break;
                case 'Copiar':
                    navigator.clipboard.writeText(name).then(() => {
                        const originalText = this.textContent;
                        this.textContent = '✓';
                        this.style.color = '#38a169';
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.color = '';
                        }, 1000);
                    }).catch(() => {
                        alert(`Nombre copiado: ${name}`);
                    });
                    break;
                case 'Buscar':
                    document.getElementById('searchInput').value = name;
                    document.getElementById('searchInput').focus();
                    break;
                case 'Más opciones':
                    showOptionsMenu(name, this);
                    break;
                default:
                    alert(`Acción "${action}" para ${name}`);
            }
        });
    });
}


document.addEventListener('keydown', function(e) {
   
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    

    if (e.key === 'Escape') {
        document.getElementById('searchInput').value = '';
        document.getElementById('searchInput').dispatchEvent(new Event('input'));
    }
});


function exportContacts() {
    const contacts = [];
    document.querySelectorAll('.contacts-table tbody tr').forEach(row => {
        const name = row.querySelector('.name-cell').textContent;
        contacts.push(name);
    });
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "contactos.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Tabla de contactos cargada correctamente');
    
 
    const contactCount = document.querySelectorAll('.contacts-table tbody tr').length;
    console.log(`Total de contactos: ${contactCount}`);
    
   
    const header = document.querySelector('.header p');
    if (header) {
        header.textContent = `Administra tu lista de contactos de manera eficiente (${contactCount} contactos)`;
    }
=======

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('.contacts-table tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.name-cell').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.title;
        const row = this.closest('tr');
        const name = row.querySelector('.name-cell').textContent;
        
        switch(action) {
            case 'Eliminar':
                if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                    // Animación de eliminación
                    row.style.transform = 'translateX(-100%)';
                    row.style.opacity = '0';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
                break;
                
            case 'Editar':
               
                alert(`Editando contacto: ${name}`);
                break;
                
            case 'Copiar':
                
                navigator.clipboard.writeText(name).then(() => {
                  
                    const originalText = this.textContent;
                    this.textContent = '✓';
                    this.style.color = '#38a169';
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 1000);
                }).catch(() => {
                    alert(`Nombre copiado: ${name}`);
                });
                break;
                
            case 'Buscar':
                
                document.getElementById('searchInput').value = name;
                document.getElementById('searchInput').focus();
                break;
                
            case 'Más opciones':
             
                showOptionsMenu(name, this);
                break;
                
            default:
                alert(`Acción "${action}" para ${name}`);
        }
    });
});


function showOptionsMenu(name, button) {
    const menu = document.createElement('div');
    menu.className = 'options-menu';
    menu.innerHTML = `
        <div class="menu-item" onclick="alert('Ver perfil de ${name}')">Ver perfil</div>
        <div class="menu-item" onclick="alert('Enviar mensaje a ${name}')">Enviar mensaje</div>
        <div class="menu-item" onclick="alert('Llamar a ${name}')">Llamar</div>
        <div class="menu-item" onclick="alert('Compartir contacto de ${name}')">Compartir</div>
    `;
    

    const rect = button.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${rect.bottom + 5}px`;
    menu.style.right = `${window.innerWidth - rect.right}px`;
    menu.style.background = 'white';
    menu.style.border = '1px solid #e0e0e0';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    menu.style.zIndex = '1000';
    menu.style.minWidth = '150px';
    
  
    const style = document.createElement('style');
    style.textContent = `
        .options-menu {
            animation: fadeInScale 0.2s ease-out;
        }
        .menu-item {
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
            font-size: 14px;
        }
        .menu-item:hover {
            background-color: #f5f5f5;
        }
        .menu-item:first-child {
            border-radius: 8px 8px 0 0;
        }
        .menu-item:last-child {
            border-radius: 0 0 8px 8px;
        }
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(menu);
    
  
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && e.target !== button) {
                menu.remove();
                style.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}


function addContact(name) {
    const tbody = document.querySelector('.contacts-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="name-cell">${name}</td>
        <td class="actions-cell">
            <button class="action-button delete-btn" title="Eliminar">🗑️</button>
            <button class="action-button" title="Copiar">📋</button>
            <button class="action-button edit-btn" title="Editar">✏️</button>
            <button class="action-button" title="Buscar">🔍</button>
            <button class="action-button" title="Más opciones">⚙️</button>
        </td>
    `;
    

    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(20px)';
    tbody.appendChild(newRow);
    
   
    setTimeout(() => {
        newRow.style.transition = 'all 0.3s ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
    }, 100);
    
  
    newRow.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.title;
            const row = this.closest('tr');
            const name = row.querySelector('.name-cell').textContent;
            
            switch(action) {
                case 'Eliminar':
                    if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                        row.style.transform = 'translateX(-100%)';
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.remove();
                        }, 300);
                    }
                    break;
                case 'Editar':
                    alert(`Editando contacto: ${name}`);
                    break;
                case 'Copiar':
                    navigator.clipboard.writeText(name).then(() => {
                        const originalText = this.textContent;
                        this.textContent = '✓';
                        this.style.color = '#38a169';
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.color = '';
                        }, 1000);
                    }).catch(() => {
                        alert(`Nombre copiado: ${name}`);
                    });
                    break;
                case 'Buscar':
                    document.getElementById('searchInput').value = name;
                    document.getElementById('searchInput').focus();
                    break;
                case 'Más opciones':
                    showOptionsMenu(name, this);
                    break;
                default:
                    alert(`Acción "${action}" para ${name}`);
            }
        });
    });
}


document.addEventListener('keydown', function(e) {
   
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    

    if (e.key === 'Escape') {
        document.getElementById('searchInput').value = '';
        document.getElementById('searchInput').dispatchEvent(new Event('input'));
    }
});


function exportContacts() {
    const contacts = [];
    document.querySelectorAll('.contacts-table tbody tr').forEach(row => {
        const name = row.querySelector('.name-cell').textContent;
        contacts.push(name);
    });
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "contactos.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Tabla de contactos cargada correctamente');
    
 
    const contactCount = document.querySelectorAll('.contacts-table tbody tr').length;
    console.log(`Total de contactos: ${contactCount}`);
    
   
    const header = document.querySelector('.header p');
    if (header) {
        header.textContent = `Administra tu lista de contactos de manera eficiente (${contactCount} contactos)`;
    }
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('.contacts-table tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.name-cell').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.title;
        const row = this.closest('tr');
        const name = row.querySelector('.name-cell').textContent;
        
        switch(action) {
            case 'Eliminar':
                if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                    // Animación de eliminación
                    row.style.transform = 'translateX(-100%)';
                    row.style.opacity = '0';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
                break;
                
            case 'Editar':
               
                alert(`Editando contacto: ${name}`);
                break;
                
            case 'Copiar':
                
                navigator.clipboard.writeText(name).then(() => {
                  
                    const originalText = this.textContent;
                    this.textContent = '✓';
                    this.style.color = '#38a169';
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 1000);
                }).catch(() => {
                    alert(`Nombre copiado: ${name}`);
                });
                break;
                
            case 'Buscar':
                
                document.getElementById('searchInput').value = name;
                document.getElementById('searchInput').focus();
                break;
                
            case 'Más opciones':
             
                showOptionsMenu(name, this);
                break;
                
            default:
                alert(`Acción "${action}" para ${name}`);
        }
    });
});


function showOptionsMenu(name, button) {
    const menu = document.createElement('div');
    menu.className = 'options-menu';
    menu.innerHTML = `
        <div class="menu-item" onclick="alert('Ver perfil de ${name}')">Ver perfil</div>
        <div class="menu-item" onclick="alert('Enviar mensaje a ${name}')">Enviar mensaje</div>
        <div class="menu-item" onclick="alert('Llamar a ${name}')">Llamar</div>
        <div class="menu-item" onclick="alert('Compartir contacto de ${name}')">Compartir</div>
    `;
    

    const rect = button.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${rect.bottom + 5}px`;
    menu.style.right = `${window.innerWidth - rect.right}px`;
    menu.style.background = 'white';
    menu.style.border = '1px solid #e0e0e0';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    menu.style.zIndex = '1000';
    menu.style.minWidth = '150px';
    
  
    const style = document.createElement('style');
    style.textContent = `
        .options-menu {
            animation: fadeInScale 0.2s ease-out;
        }
        .menu-item {
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
            font-size: 14px;
        }
        .menu-item:hover {
            background-color: #f5f5f5;
        }
        .menu-item:first-child {
            border-radius: 8px 8px 0 0;
        }
        .menu-item:last-child {
            border-radius: 0 0 8px 8px;
        }
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(menu);
    
  
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && e.target !== button) {
                menu.remove();
                style.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}


function addContact(name) {
    const tbody = document.querySelector('.contacts-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="name-cell">${name}</td>
        <td class="actions-cell">
            <button class="action-button delete-btn" title="Eliminar">🗑️</button>
            <button class="action-button" title="Copiar">📋</button>
            <button class="action-button edit-btn" title="Editar">✏️</button>
            <button class="action-button" title="Buscar">🔍</button>
            <button class="action-button" title="Más opciones">⚙️</button>
        </td>
    `;
    

    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(20px)';
    tbody.appendChild(newRow);
    
   
    setTimeout(() => {
        newRow.style.transition = 'all 0.3s ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
    }, 100);
    
  
    newRow.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.title;
            const row = this.closest('tr');
            const name = row.querySelector('.name-cell').textContent;
            
            switch(action) {
                case 'Eliminar':
                    if (confirm(`¿Estás seguro de que quieres eliminar a ${name}?`)) {
                        row.style.transform = 'translateX(-100%)';
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.remove();
                        }, 300);
                    }
                    break;
                case 'Editar':
                    alert(`Editando contacto: ${name}`);
                    break;
                case 'Copiar':
                    navigator.clipboard.writeText(name).then(() => {
                        const originalText = this.textContent;
                        this.textContent = '✓';
                        this.style.color = '#38a169';
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.color = '';
                        }, 1000);
                    }).catch(() => {
                        alert(`Nombre copiado: ${name}`);
                    });
                    break;
                case 'Buscar':
                    document.getElementById('searchInput').value = name;
                    document.getElementById('searchInput').focus();
                    break;
                case 'Más opciones':
                    showOptionsMenu(name, this);
                    break;
                default:
                    alert(`Acción "${action}" para ${name}`);
            }
        });
    });
}


document.addEventListener('keydown', function(e) {
   
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    

    if (e.key === 'Escape') {
        document.getElementById('searchInput').value = '';
        document.getElementById('searchInput').dispatchEvent(new Event('input'));
    }
});


function exportContacts() {
    const contacts = [];
    document.querySelectorAll('.contacts-table tbody tr').forEach(row => {
        const name = row.querySelector('.name-cell').textContent;
        contacts.push(name);
    });
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "contactos.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Tabla de contactos cargada correctamente');
    
 
    const contactCount = document.querySelectorAll('.contacts-table tbody tr').length;
    console.log(`Total de contactos: ${contactCount}`);
    
   
    const header = document.querySelector('.header p');
    if (header) {
        header.textContent = `Administra tu lista de contactos de manera eficiente (${contactCount} contactos)`;
    }
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
});