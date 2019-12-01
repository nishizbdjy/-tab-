
class tab{
    constructor(obj){
    obj = obj || {}
    this.yans = obj.yans;
    this.xianshi = obj.xianshi;
    this.liclass = obj.liclass;
    this.ulclass = obj.ulclass;
    this.shijianleixing = obj.shijianleixing;
    this.li = document.querySelectorAll(this.liclass);
    this.ul = document.querySelectorAll(this.ulclass);
    console.log(this.ul);
    
    this.zuceshijian();
    }
    zuceshijian(){
      this.li.forEach((e,i)=>{
          e.addEventListener(this.shijianleixing,(e)=>{
            let target = e.target
            this.qiehuanbeijing(target);
            this.qiehuanneirong(i)
          })
      })
    }
    qiehuanbeijing(target){
     this.li.forEach((e,i)=>{
         e.classList.remove(this.yans)
     })
      target.classList.add(this.yans)
    }
    qiehuanneirong(suoyin){
      this.ul.forEach((e,i)=>{
          e.classList.remove(this.xianshi)
      })
      this.ul[suoyin].classList.add(this.xianshi)
    }
}

