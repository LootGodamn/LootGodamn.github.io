document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const scrollbar = document.getElementById('scrollbar');

    // Show/hide scrollbar and sidebar on hover
    sidebar.addEventListener('mouseenter', function() {
        scrollbar.style.opacity = '1';
        sidebar.style.left = '0';
    });

    sidebar.addEventListener('mouseleave', function() {
        scrollbar.style.opacity = '0';
        sidebar.style.left = '-250px';
    });
});