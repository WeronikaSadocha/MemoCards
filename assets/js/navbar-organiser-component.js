Vue.component('navbar_and_sidebar', {
    template:
    ` <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img id="logo" src="assets/images/Logo.png">
        </a>
        <ul class="navbar-organizer-links">
            <li id="logout-organizer">Logout</li>
            <li @click="isActiveAnimate=!isActiveAnimate">
                <svg @click="toggleTimeOut()"   xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40" height="40"
            viewBox="0 0 128 128"
            style=" fill:#000000;"><path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g></svg>
            </li>
        </ul>
    </nav>

    <div class="sidebarposition" :class="{toggle:isActiveTimeout}">
        <div class="sidebar" 
        :class="{sidebar:!isActiveAnimate, 
        fadeout:isActiveAnimate, 
        fadeOut:isActiveAnimate}">
            <ul class = sidebar-list> 
                <li><i class="fa-solid fa-list-check"></i>
                    Todo's List
                </li>
                <li> <i class="fa-regular fa-calendar"></i>
                    Calendar
                </li>
                <li> <i class="fa-regular fa-clipboard"></i>
                    Notes
                </li>
            </ul>
        </div>
    </div>
    </div>
  `,
    
data() {
  return {
    isActiveAnimate: true,
    isActiveTimeout: true,
  }
},

methods: {
    toggleTimeOut(){
        setTimeout(() => this.isActiveTimeout = !this.isActiveTimeout, 500);
    }
},


})