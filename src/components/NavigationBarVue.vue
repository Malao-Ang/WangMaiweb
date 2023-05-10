<template>
  <div>
    <nav>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a> <router-link to="/">Home</router-link></a>
              </li>
              <li>
                <a><router-link to="/about">About</router-link></a>
              </li>
              <li>
                <a><router-link to="/login">Login</router-link></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl">WANGMAI</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div class="avatar">
            <div
              class="w-8 mr-3 ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-1/327006796_686653046481563_74172586481304136_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGEAvjUZgjr4Ldk4_bDMapkG2uM1p0Y8UUba4zWnRjxRdd_nyCjhj_TqXpQpgmaW-RYNMlcF3dmK1ThbCdpxbYG&_nc_ohc=QGvM-bTnDWYAX-qh3yz&_nc_ht=scontent.fbkk2-5.fna&oh=00_AfBs_IAvZN4xt0AKBEyUmgc563tMr_5IiRuOw-vDU6pNnw&oe=64604566" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
