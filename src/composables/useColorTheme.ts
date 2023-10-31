const isDarkActive = ref(true)

export default function useColorTheme() {

    const changeTheme = () => {
        isDarkActive.value = !isDarkActive.value
        if (isDarkActive.value === true) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
    }

    return { isDarkActive, changeTheme }
}