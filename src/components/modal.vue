<template>
  <div class="modal">
        <h1>добавить в корзину</h1>
        <p>Выберите размер:</p>
        <div class="modal-wrapper">
            <div class="modal-size">S</div>
            <div class="modal-size">M</div>
            <div class="modal-size">L</div>
        </div>
        <button type="button" class="btn-modal">Добавить</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.modal{
    width: 567px;
    border: 1px solid #c6c6c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 29%;
    top: 25%;
    background-color: white;
    display: none;
}
.show{
    display: flex;
    opacity: 1 !important;
}
.blur{
    opacity: 0.2;
}
.modal>h1{
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 40px;
}
.modal>p{
    font-size: 17px;
}
.modal-size{
    cursor: pointer;
    padding: 20px 50px;
    font-size: 17px;
    font-weight: bold;
    box-sizing: border-box;
    width: 112px;
    display: flex;
    justify-content: center;
    border: 2px solid #ececec;
}
.modal-size:hover{
    border-color: #63d1bb;
}
.btn-modal{
    width: 350px;
    background-color: #63d1bb;
    border: none;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 18px;
    cursor: pointer;
    margin-bottom: 45px;
}
.modal-wrapper{
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin-bottom: 40px;
}
</style>