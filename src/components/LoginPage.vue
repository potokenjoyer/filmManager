<template>
<div>
 
  <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class="[{ active: currentTab === tab }]"
       @click="currentTab = tab, console.log(currentTab)"
     >123
    </button>
	  <component :is="tabs[currentTab]" class="tab"></component>
</div>

</template>

<script setup>
import { ref } from "vue";
import LoginTab from "@/components/formTabs/LoginTab.vue";
import RecoveryTab from "@/components/formTabs/RecoveryTab.vue";
import ReturnTab from "@/components/formTabs/ReturnTab.vue";

const currentTab = ref("LoginTab");

const tabs = {
  LoginTab,
  RecoveryTab,
  ReturnTab,
};



</script>

<style>
.recovery {
  color: #409eff;
  padding-bottom: 10px;
}

.links-container {
  padding: 20px;
}

.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.forgot-pass-link {
  color: black;
}
.registration-link {
  color: black;
}
.login-page {
  width: 400px;
  margin: auto;
}

.input-login {
  padding-bottom: 12px;
  width: 300px;
}
.input-password {
  padding-bottom: 20px;
  width: 300px;
}
.form {
  position: relative;
  background: #ffffff;
  padding: 45px;
  padding-bottom: 10px;
  text-align: center;
  border-radius: 10px;
  width:550px ;
  height: 361px;
}
.logo {
  font-size: 42px;
  font-weight: bold;
  font-family: Roboto;
  color: #409eff;
  padding-bottom: 20px;
}
</style>
