<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-28 13:59:26
 * @LastEditTime: 2021-07-28 15:37:54
-->
<template>
  <div class="github-profiles">
    <div class="user-form" id="form">
      <input
        type="text"
        id="search"
        v-model="username"
        @keydown.enter="getInfo"
        autocomplete="off"
        placeholder="Search a Github User"
      />
    </div>
    <main id="main" v-if="showCard && !reqError">
      <div class="card">
        <div>
          <img :src="user.avatar_url" :alt="user.name" class="avatar" />
        </div>
        <div class="user-info">
          <h1>{{ user.name }}</h1>
          <p>{{ user.bio }}</p>
          <ul>
            <li>{{ user.followers }} <strong>Followers</strong></li>
            <li>{{ user.following }} <strong>Followeing</strong></li>
            <li>{{ user.public_repos }} <strong>Repos</strong></li>
          </ul>
          <div id="repos">
            <a
              class="repo"
              :href="item.html_url"
              v-for="(item, index) in reopTop5"
              target="_blank"
              :key="index"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </div>
      <div class="card" v-if="reqError">
        <h1>{{ ErrMessage }}</h1>
      </div>
    </main>
  </div>
</template>

<script>
const APIURL = "https://api.github.com/users/";
const config = {
  headers: {
    Accept: "application/json",
  },
};
export default {
  data() {
    return {
      showCard: false,
      reqError: false,
      ErrMessage: "",
      username: "",
      user: "",
      reopTop5: [],
    };
  },
  methods: {
    async getUser() {
      try {
        const data = await fetch(APIURL + this.username, config);
        const json = await data.json();
        this.user = json;
      } catch (e) {
        this.reqError = true;
        this.ErrMessage = "No profile with this username";
      }
    },
    async getRepos() {
      try {
        const data = await fetch(
          APIURL + this.username + "/repos?sort=created",
          config
        );
        const json = await data.json();
        console.log(json);
        this.reopTop5 = json.slice(0, 5);
      } catch (e) {
        this.reqError = true;
        this.ErrMessage = "Problem fetching repos";
      }
    },
    getInfo() {
      this.showCard = true;
      this.getUser();
      this.getRepos();
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");

* {
  box-sizing: border-box;
}

.github-profiles {
  background-color: #2a2a72;
  color: #fff;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  overflow: hidden;
  margin: 0;
}

.user-form {
  width: 100%;
  max-width: 700px;
}

.user-form input {
  width: 100%;
  display: block;
  background-color: #4c2885;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
}

.user-form input::placeholder {
  color: #bbb;
}

.user-form input:focus {
  outline: none;
}

.card {
  max-width: 800px;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 3rem;
  margin: 0 1.5rem;
}

.avatar {
  border-radius: 50%;
  border: 10px solid #2a2a72;
  height: 150px;
  width: 150px;
}

.user-info {
  color: #eee;
  margin-left: 2rem;
}

.user-info h2 {
  margin-top: 0;
}

.user-info ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  max-width: 400px;
}

.user-info ul li {
  display: flex;
  align-items: center;
}

.user-info ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.repo {
  text-decoration: none;
  color: #fff;
  background-color: #212a72;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;
  }
}
</style>