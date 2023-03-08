const inputList = document.querySelector('.input-todo')
            const inputButton = document.querySelector('.button-add')

            inputButton.addEventListener('click', addList)
            inputList.addEventListener('keyup', (e)=>{
                (e.keyCode===13 ? addList(e) : null)
            })

            function addList(e){
                e.preventDefault()
                console.log("aaaas")

                const notCompleted = document.querySelector('.not-completed')
                const completed = document.querySelector('.completed')

                const newTask = document.createElement('li')
                const checkButton = document.createElement('button')
                const trashButton = document.createElement('button')

                checkButton.innerHTML = '<i class="fa fa-check"></i>'
                trashButton.innerHTML = '<i class="fa fa-trash"></i>'

                if(inputList.value !== ''){
                    newTask.innerHTML = inputList.value
                    inputList.value = ''
                    newTask.appendChild(checkButton)
                    newTask.appendChild(trashButton)
                    notCompleted.appendChild(newTask)
                }

                checkButton.addEventListener('click', function(){
                    const parent = this.parentNode
                    parent.remove()
                    completed.appendChild(parent)
                })

                trashButton.addEventListener('click', function(){
                    const parent = this.parentNode
                    parent.remove()
                })
            }