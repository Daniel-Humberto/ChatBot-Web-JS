// Clase de estado del menú para gestionar la navegación jerárquica
class MenuState {
    constructor() {
        this.currentState = '0';
        this.history = [];
    }


    // Transición de estados con seguimiento de historial
    transition(newState) {
        this.history.push(this.currentState);
        this.currentState = newState;
        return this.getMenuOptions();
    }


    // Retroceder al estado anterior
    goBack() {
        if (this.history.length > 0) {
            this.currentState = this.history.pop();
            return this.getMenuOptions();
        }
        return this.welcomeMessage();
    }


    // Obtener opciones de menú según el estado actual
    getMenuOptions() {
        const menuStructure = {


            // Menu Principal
            '0': {
                message: "¡Hola! Bienvenido a este ChatBot Web basado en reglas y jeraquias, desarrollado por Humbert, Ingeniero en Software y  Sistemas Computacionales.",
                options: [
                    { key: 'A', label: 'Habilidades y Tecnologías', nextState: 'A' },
                    { key: 'B', label: 'Proyectos Destacados', nextState: 'B' },
                    { key: 'C', label: 'Contacto', nextState: 'C' },
                    { key: 'D', label: 'LinkedIn', nextState: 'D' },
                    { key: 'E', label: 'CodePen', nextState: 'E' },
                    { key: 'F', label: 'GitHub', nextState: 'F' }
                ]
            },


            // Submenú A - Habilidades y Tecnologías
            'A': {
                message: "Habilidades y Tecnologías:",
                options: [
                    { key: '0', label: 'Menú Anterior', nextState: '0' },
                    { key: '1', label: 'Google Cloud', nextState: 'A1' },
                    { key: '2', label: 'Python para Data Scientist Avanzado', nextState: 'A2' },
                    { key: '3', label: 'Data Scientist: Minería de Datos Esencial', nextState: 'A3' },
                    { key: '4', label: 'Data Analyst: Técnicas y Herramientas de Informes Avanzado', nextState: 'A4' },
                    { key: '5', label: 'Ataques, Amenazas y Vulnerabilidades de Ciberseguridad (CompTIA Security+ SY0-601)', nextState: 'A5' }
                ]
            },

            // Submenú B - Proyectos Destacados
            'B': {
                message: "Proyectos Destacados:",
                options: [
                    { key: '0', label: 'Menú Anterior', nextState: '0' },
                    { key: '1', label: 'Data Analysis Dashboard con HTML, CSS, JS y ChartJS ', nextState: 'B1' },
                    { key: '2', label: 'ChatBot Web Basado en Reglas y Jerarquias', nextState: 'B2' },
                    { key: '3', label: 'Wallpaper Switcher Script Linux', nextState: 'B3' },
                    { key: '4', label: 'Grand Prix Terminal', nextState: 'B4' },
                    { key: '5', label: 'Pandas Data App', nextState: 'B5' }
                ]
            },

            // Submenú C - Contacto
            'C': {
                message: "Puedes contactarme por correo electrónico: <a href='mailto:DanielHumbertoReyesRocha@Outlook.com'>DanielHumbertoReyesRocha@Outlook.com</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' }
                ]
            },

            // Submenú D - LinkedIn
            'D': {
                message: "Conéctate conmigo en LinkedIn: <a href='https://www.linkedin.com/in/daniel-humberto-reyes-rocha' target='_blank'>Mi LinkedIn</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' }
                ]
            },

            // Submenú E - CodePen
            'E': {
                message: "Ve mis Proyectos en CodePen: <a href='https://codepen.io/Daniel-Humberto' target='_blank'>CodePen</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' }
                ]
            },

            // Submenú F - GitHub
            'F': {
                message: "Ve mis Proyectos en GitHub: <a href='https://github.com/Daniel-Humberto' target='_blank'>GitHub</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' }
                ]
            },


            // Submenú A1
            'A1': {
                message: "Certificado de Google Cloud: <a href='https://www.cloudskillsboost.google/public_profiles/b46678d8-1ace-4eae-8bfb-8089ab0a7e86?locale=es' target='_blank'>Certificado</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'A' }
                ]
            },

            // Submenú A2
            'A2': {
                message: "Certificado de Python para Data Scientist Avanzado: <a href='https://www.linkedin.com/learning/certificates/ae23946ae272fcbe137ae56458bc2f3e12a461c8a3a50bf6f86db984206a4cb7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfsLEY6MYRZGRQ8jCDbcTUA%3D%3D&accountId=89909618&u=89909618&success=true&authUUID=ZvDkUPlYSmibg5mbn6Gj1w%3D%3D' target='_blank'>Certificado</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'A' }
                ]
            },

            // Submenú A3
            'A3': {
                message: "Certificado de Data Scientist: Minería de Datos Esencial: <a href='https://www.linkedin.com/learning/certificates/38cff7a053778e6c78f78586fc1ef86f2efe13edac65f48288712ae8c1229d7b?u=89909618' target='_blank'>Certificado</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'A' }
                ]
            },

            // Submenú A4
            'A4': {
                message: "Certificado de Data Analyst: Técnicas y Herramientas de Informes Avanzado: <a href='https://www.linkedin.com/learning/certificates/46b55051d14af4f6eb3bd887622fdee5339dedf9ded59d143ac490c9fd2c2c07?u=89909618' target='_blank'>Certificado</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'A' }
                ]
            },            

            // Submenú A5
            'A5': {
                message: "Certificado de Ataques, Amenazas y Vulnerabilidades de Ciberseguridad (CompTIA Security+ SY0-601): <a href='https://www.linkedin.com/learning/certificates/28ccb7f3463a3961afdd6b0f69f6b314d8710f0b568888290ca7f9dc53b5a57b?u=89909618' target='_blank'>Certificado</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'A' }
                ]
            },            


            // Submenú B1
            'B1': {
                message: "Ve el Proyecto  Data Analysis Dashboard  en CodePen: <a href='https://codepen.io/Daniel-Humberto/pen/yLmBOxJ' target='_blank'>CodePen</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'B' }
                ]
            },

            // Submenú B2
            'B2': {
                message: "Ve el Proyecto  ChatBot Web Basado en Reglas y Jerarquias  en GitHub: <a href='https://github.com/Daniel-Humberto/ChatBot-Web-JS' target='_blank'>GitHub</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'B' }
                ]
            },

            // Submenú B3
            'B3': {
                message: "Ve el Proyecto  Wallpaper Switcher Script Linux  en GitHub: <a href='https://github.com/Daniel-Humberto/auto-wallpaper-changer' target='_blank'>GitHub</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'B' }
                ]
            },

            // Submenú B4
            'B4': {
                message: "Ve el Proyecto  Grand Prix Terminal  en GitHub: <a href='https://github.com/Daniel-Humberto/Grand-Prix-Terminal' target='_blank'>GitHub</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'B' }
                ]
            },            

            // Submenú B5
            'B5': {
                message: "Ve el Proyecto  Pandas Data App  en GitHub: <a href='https://github.com/Daniel-Humberto/PandasDataApp' target='_blank'>GitHub</a>",
                options: [
                    { key: '0', label: 'Menú Principal', nextState: '0' },
                    { key: '1', label: 'Menú Anterior', nextState: 'B' }
                ]
            },            


        };
        return menuStructure[this.currentState] || this.welcomeMessage();
    }


    // Método inicilaizar el mensaje inicial
    welcomeMessage() {
        return this.getMenuOptions();
    }
}




// Clase de ChatBot con gestión de estado
class ChatBot {
    constructor() {
        this.menuState = new MenuState();
    }


    // Procesar mensaje de entrada
    processMessage(input) {
        input = input.trim().toUpperCase();
    
        // Manejo de comandos especiales
        if (input === 'BACK') {
            return this.menuState.goBack();
        }
    
        const currentMenu = this.menuState.getMenuOptions();
        const selectedOption = currentMenu.options.find(opt => opt.key === input);
    
        if (selectedOption) {
            if (selectedOption.nextState) {
                return this.menuState.transition(selectedOption.nextState);
            }
            return { message: "Opción procesada" };
        }
    
        return { 
            message: "Opción no válida. Por favor, selecciona una opción del menú.",
            options: currentMenu.options 
        };
    }


    // Método para formatear la respuesta
    formatResponse(response) {
        let formattedResponse = response.message + "\n\n";
        
        if (response.options) {
            response.options.forEach(opt => {
                formattedResponse += `${opt.key} - ${opt.label}\n`;
            });
        }

        return formattedResponse;
    }
}




// Inicialización y configuración del DOM
document.addEventListener('DOMContentLoaded', () => {
    const chatBot = new ChatBot();
    const chatInput = document.getElementById('input');
    const chatButton = document.getElementById('button');
    const chatContainer = document.getElementById('chat');


    // Método para mostrar un mensaje en el chatbot
    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.innerHTML = message.replace(/\n/g, '<br>');
        messageElement.appendChild(textElement);
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }


    // Método para enviar un mensaje al chatbot y mostrar la respuesta
    function sendMessage() {
        const input = chatInput.value.trim();
        if (!input) return;

        displayMessage(input, 'user');
        
        const response = chatBot.processMessage(input);
        const formattedResponse = chatBot.formatResponse(response);

        setTimeout(() => {
            displayMessage(formattedResponse, 'bot');
        }, 500);

        chatInput.value = '';
    }

    // Event Listeners
    chatButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') sendMessage();
    });


    // Mostrar mensaje inicial
    displayMessage(chatBot.formatResponse(chatBot.menuState.welcomeMessage()), 'bot');
});