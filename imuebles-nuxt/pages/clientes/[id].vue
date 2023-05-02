<template>
    <div>
        <p>Details of Clientes {{ id }}</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quis, repellat quae explicabo molestias quas
            fugiat praesentium perferendis nesciunt error architecto aliquid, tempore voluptas perspiciatis dolorum
            inventore beatae. Dignissimos, vitae?
            Consequuntur recusandae libero est incidunt. Natus nisi neque voluptatibus debitis ut incidunt beatae fugit odio
            saepe aperiam, ab et quo impedit officia expedita molestiae deleniti dolor officiis perferendis magnam nulla.
            Eum praesentium perferendis quia sed officiis, culpa est porro accusantium vel animi! Earum voluptate ex aliquam
            quidem suscipit aperiam, quas eum itaque ullam recusandae optio velit, eligendi maiores qui at!
            Dolores explicabo aut similique nam et deleniti laboriosam harum accusantium voluptas iusto sapiente animi quae,
            sunt illo omnis error temporibus inventore repellat facere, asperiores ratione id? Porro excepturi mollitia
            perspiciatis!
            Tenetur libero, vero praesentium itaque repudiandae aliquam quo doloremque ut facilis porro amet et! Omnis fugit
            ipsam dolor nostrum cupiditate, nulla voluptatem ducimus eos neque quasi amet dolorum ullam est.</p>
    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

if (logInfo.user?.token == "")
    navigateTo("/login")

const { id } = useRoute().params
</script>

<style lang="scss" scoped></style>