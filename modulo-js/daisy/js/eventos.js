main.innerHTML = home();

menu_home.addEventListener('click', function () {
    main.innerHTML = home();
});

menu_add.addEventListener('click', function () {
    main.innerHTML = add();
});

menu_list.addEventListener('click', function () {
    main.innerHTML = list();
});

menu_config.addEventListener('click', function () {
    main.innerHTML = config();
});