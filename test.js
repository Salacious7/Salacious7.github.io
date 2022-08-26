window.onload=function()
{
    let test = document.querySelector("input[name=partner]")
    test.addEventListener('change', function()
    {
    if (this.checked)
    {
        let test2 = document.querySelector("div[id=satisfaction]")
        test2.style.display = 'block'
    }
    else
    {
        let test2 = document.querySelector("div[id=satisfaction]")
        test2.style.display = 'none'
    }
    });
}

