import { LitElement, html, css } from "lit";
export class tc_shares extends LitElement{
  static properties = { shares: {} };
    static styles = css`
    a {
      color: var(--tc-link-color, blue);
      text-decoration: none;
    }
  `
  loadData() {
    fetch("/api/shares").then((resp) => {
      resp.json().then((res) => {
        this.shares = res;
      });
    });
  }
  render(){
    if(!this.shares){
      return
    }
   var  h=[]
    for (var i in this.shares){
      var path=this.shares[i].path
      if (path==""){
        path="/"
      }
      h.push(html`<a href=/shares/${i}> ${path}&nbsp|&nbspUser:${this.shares[i].username}</a><button>del</button></br>`)
    }
    return html`${h}<button>new</button>`
  }
}

customElements.define("tc-shares", tc_shares);
