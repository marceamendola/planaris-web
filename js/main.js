// ============================================
// PLANARIS - JAVASCRIPT GLOBAL
// ============================================

// Menú móvil
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Smooth scroll para enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Cerrar menú móvil después de click
                const navMenu = document.getElementById('navMenu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Manejo del formulario de contacto (solo en página principal)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Crear mailto con los datos
            const subject = `Presupuesto - ${servicio}`;
            const body = `Nombre: ${nombre}%0D%0AServicio: ${servicio}%0D%0AEmail: ${email}%0D%0ATeléfono: ${telefono}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;
            
            // Abrir cliente de email
            window.location.href = `mailto:info@planaris.com.ar?subject=${subject}&body=${body}`;
            
            // Resetear formulario
            this.reset();
        });
    }
});