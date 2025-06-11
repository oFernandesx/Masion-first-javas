// Script do cabeçalho
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
let lastScrollY = window.scrollY;

// Lógica para o menu hambúrguer
if (menuToggle && nav && header) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // Anima o hambúrguer
        header.classList.toggle('menu-open'); // Adiciona/remove 'menu-open' no header

        // Se o menu estiver aberto, queremos que o header permaneça visível e preto.
        // E remove as classes de scroll.
        if (header.classList.contains('menu-open')) {
            header.classList.remove('hide');
            header.classList.remove('scrolled');
        } else {
            // Quando fechar o menu, reavalie a posição de scroll para aplicar 'scrolled' se necessário
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            }
            // Certifique-se de que o header não está escondido se fechar o menu e estiver rolando para cima
            header.classList.remove('hide'); 
        }
    });

    // Fechar o menu quando um item é clicado (útil para SPAs ou rolagem)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('menu-open')) {
                menuToggle.classList.remove('active');
                header.classList.remove('menu-open');
                // Reavalie o estado de scroll ao fechar o menu
                if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                }
                header.classList.remove('hide'); // Garante visibilidade
            }
        });
    });
}


// Lógica para o cabeçalho ao rolar
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Se o menu estiver aberto, o comportamento de scroll deve ser ignorado para o header
    if (header.classList.contains('menu-open')) {
        lastScrollY = currentScrollY; 
        return; 
    }

    // Lógica normal de scroll quando o menu não está aberto
    if (currentScrollY === 0) {
        header.classList.remove('hide');
        header.classList.remove('scrolled');
    } else if (currentScrollY > lastScrollY) {
        // Rolando para baixo
        header.classList.add('hide'); 
        header.classList.remove('scrolled'); 
    } else {
        // Rolando para cima (e não no topo)
        header.classList.remove('hide'); 
        header.classList.add('scrolled'); 
    }

    lastScrollY = currentScrollY;
});