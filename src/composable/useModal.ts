import { Ref, ref } from "vue";

const isModalActive: Ref<boolean> = ref(false)

function toggleModal() {
    if (window.innerWidth < 768) {
        isModalActive.value = !isModalActive.value
    }

    if (!isModalActive.value)
        document.body.style.overflowY = 'auto'
    else
        document.body.style.overflowY = 'hidden'


}

export { isModalActive, toggleModal }