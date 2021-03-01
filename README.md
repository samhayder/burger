# Education: https://samhayder-burger.netlify.app/

> Website HTML Template

## Template Info

### Author

### Version

0.1.0

## Credit Resources (jQuery Plugin)

## Documentation:

#### Responsive Menu:-

```bash
>>index.html
    <label id="menu_icon" class="d-lg-none">
        <i class="fas fa-bars    "></i>
    </label>
```

```bash
>>style.css
    @media (max-width: 991px) {
        nav #menu_icon {
            display: block;
        }
        nav ul {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: rgba(61, 61, 61, 0.4);
            top: 150px;
            left: -100%;
            text-align: center;
            transition: all 1s ease-in-out;
        }
        nav ul.show {
            left: 0;
        }
        nav ul li {
            display: block;
            padding-bottom: 20px;
        }
    }
```

```bash
>>app.js
    //Get DOM
    let menu = document.querySelector('nav ul');
    let menuIcon = document.querySelector('#menu_icon');
    //Initial value
    let showMenu = false;
    //Event Listener
    menuIcon.addEventListener('click', ()=> {
        if(!showMenu) {
            menu.classList.add('show');
            showMenu = true;
        } else {
            menu.classList.remove('show');
            showMenu = false;
        }
    })
```
