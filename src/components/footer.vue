<template>
    <footer>
        <div class="footer-wrapper">
            <img src="@/assets/logo-footer.svg" alt="Лого">
            <ul class=" footer-links">
                <li><img src="@/assets/insta.svg"></li>
                <li><img src="@/assets/fb.svg"></li>
                <li><img src="@/assets/twitter.svg"></li>
            </ul>
            <div>Developed
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer{
    background-color: #f1f1f1;
    height: 145px;
    display: flex;
    align-items: center;
}
.footer-wrapper{
    display: flex;
    width: 1050px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
}
.footer-links{
    display: flex;
    padding-left: 0px;
    width: 350px;
    justify-content: space-evenly;
    align-items: baseline;
}
.footer-links>li{
    cursor: pointer;
}
</style>