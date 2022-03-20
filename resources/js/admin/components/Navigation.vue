<template>
  <component :is="'style'">
    .toggle {
      --width: 50px;
      --height: calc(var(--width) / 3);

      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: var(--height);
      cursor: pointer;
      margin-top:10px;
    }

    .toggle input {
      display: none;
    }

    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: #ccc;
      transition: all 0.4s ease-in-out;
    }

    .toggle .slider::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--height));
      height: calc(var(--height));
      border-radius: calc(var(--height) / 2);
      background-color: #fff;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked+.slider {
      background-color: #1FA13D;
    }

    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height)));
    }
  </component>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/admin/dashboard" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <label class="toggle">
          <input type="checkbox" v-model="dark" @change="switchDarkMode(event)">
          <span class="slider"></span>
        </label>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>
<script >
  export default {
    data(){
      return {
        dark : false
      }
    },
    methods :{
      switchDarkMode(event){
        if(this.dark==true){
          document.body.classList.add("dark-mode");
          window.cookies.set("admin_dark","true","1D", null, null, null, "Lax");
        }else{
          document.body.classList.remove('dark-mode');
          window.cookies.remove('admin_dark');
        }
      },
      turnToDarkMode(){
        if(window.cookies.get('admin_dark')=="true"){
          this.dark=true;
          document.body.classList.add("dark-mode");
          window.cookies.set("admin_dark","true","1D", null, null, null, "Lax");
        }
      }
    },
    created(){
      this.turnToDarkMode();
    }
  }
</script>