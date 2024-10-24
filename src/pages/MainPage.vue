<template>
    <div class="wrapper">
        <div class="logo-container">
            <h1 class="logo">fWatch</h1>
            <ElLink 
            class="link"
            type="primary"
            @click="$router.push({ name: 'login' })">
            Выйти
        </ElLink>
    </div> 
        <div class="link-container">
            <div class="header">
                <ElLink class="link"
                    type="primary">
                    Фильмы
                </ElLink>
                <ElLink class="link"
                    type="primary">
                    Жанры
                </ElLink>
                    
                <ElLink class="link"
                    type="primary">
                    Актеры
                </ElLink>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>



.wrapper  {
    display: flex;
    width: 80%;
    border-bottom: 1px solid #292929 ;
    justify-content: space-between;
    padding-top: 2%;
    height: 10%;
}

.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.link-container{
    width: 20%;
    display: flex;
}
.logo-container{
    width: 20%;
    display: flex;
    align-items: center;
    gap: 30px;
}
.link{
    font-size: 30px;
}

.logo {
    font-size: 70px;
    font-weight: bold;
    font-family: Roboto;
    color: #409eff;
    padding-bottom: 10px;
  }
</style>