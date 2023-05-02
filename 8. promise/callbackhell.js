const box = document.querySelector(".box")

setTimeout(() => {
    box.classList.add("move")

    setTimeout(() => {
        box.classList.add("bigger")

        setTimeout(() => {
            box.classList.add("circle")

            setTimeout(() => {
                box.classList.add("colorful")

                setTimeout(() => {
                    box.classList.remove("colorful")

                    setTimeout(() => {
                        box.classList.remove("circle")

                        setTimeout(() => {
                            box.classList.remove("bigger")

                            setTimeout(() => {
                                box.classList.remove("move")

                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)