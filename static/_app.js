;(function(a){var _s = '*{box-sizing:border-box}body{margin:0;padding:0;background:#444}#WAPP{font-family:Arial;margin:10px 0}#_W{display:none}#w,.acts{width:320px;margin:0 auto;border-radius:4px;color:#FFF;line-height:20px;font-size:14px;padding:15px;position:relative;overflow:hidden;box-shadow:0 0 15px 0 rgba(0,0,0,.25)}#w{background:#8200FF}.w_qr{text-align:center}.w_qr img{overflow:hidden;border-radius:6px;box-shadow:0 0 10px 0 rgba(60,60,60,.2)}.w_b{font-size:17px;line-height:34px;text-shadow:0 0 1px #FFF;background:#460186;margin:0 -15px 10px;padding:0 15px}.w_i{margin:15px 0 0}#na_a,#w_a{border-radius:2px;padding:5px 4px;font-size:11px;display:block;max-width:100%;text-align:center;box-shadow:0 0 10px 0 rgba(83,83,83,.5);color:#60007A;margin-top:4px;text-decoration:underline;font-weight:700;background:#FFF}#w_a:hover{text-decoration:none;background:rgba(255,255,255,.94)}#na_a{text-decoration:none;padding:5px 4px;max-width:100%;margin:0 0 10px;box-shadow:none;border:1px solid #DCDCDC}#spin{height:4px;background:#460186;position:absolute;left:0;bottom:0}#w_s{margin-top:30px;background:#FFF;border-radius:3px;padding:15px 15px 5px;color:#333;box-shadow:0 0 10px 0 rgba(83,83,83,.5)}#w_s .w_s_l,.a_title{text-align:center;display:block;margin-bottom:10px;font-weight:700}.ta,.text{display:block;border-radius:3px;height:34px;font-size:13px;border:2px solid #8200FF;width:100%;padding:8px 2px;color:#333;margin-bottom:10px}.ta{height:auto;resize:none;padding:5px}.text._err{border-color:#FF564D}.btn{display:block;border-radius:3px;text-align:center;width:100%;padding:10px 20px;border:2px solid #8200FF;font-weight:700;transition:all .3s;background:#8200FF;color:#FFF;text-decoration:none}.btn[disabled]{opacity:.7;cursor:not-allowed}.btn:not([disabled]):hover{background:#FFF;cursor:pointer;color:#333}.acts{background:#FAFAFA;overflow:hidden;color:#333}.dd{width:100%;max-width:300px;margin:20px auto;text-align:center;position:relative;font-weight:700}.dd::before,.dd::after{content:\'\';display:block;position:absolute;border-top:1px solid #333;top:50%;width:40%}.dd::after{right:0}.mw{font-size:13px;position:fixed;background:rgba(0,0,0,.5);left:0;bottom:0;width:100%;min-height:100%;overflow:auto;overflow-x:hidden;z-index:100;display:none}.mw._opn{display:block}.mw-o{position:absolute;top:0;left:0;width:100%;overflow:auto}.mw-m{background:#FFF;min-width:310px;max-width:400px;margin:30px auto;z-index:101;border-radius:4px;border-top:10px solid #8200FF;position:relative}.mw-h{border-bottom:1px solid #CCC;padding:10px 15px;margin:0 0 15px}.mw-b{padding:0 15px}.mw-f{padding:0 15px 15px}.mw-c{position:absolute;background:#8200FF;color:#FFF;text-align:center;display:block;width:30px;height:30px;line-height:32px;border-radius:30px;right:-15px;top:-20px;overflow:hidden;text-decoration:none;font-family:serif;font-size:15px;font-weight:100}.mw-c:after{content:\' \\2715\'}#w_r{background:#DFFFE7;color:#000;margin:10px 0 0;border-radius:4px;padding:20px;display:none;overflow:hidden}#w_rl{display:inline-block;overflow:hidden;max-width:100%;text-overflow:ellipsis}#p_qr._opn{position:fixed;left:50%;width:450px;max-width:100%;top:30px;transform:translateX(-50%);z-index:102}#p_qr_label{font-size:12px;display:block;margin:0 0 5px 0}#p_qr img{height:auto;max-width:100%;margin:0 0 5px;border:10px #FFF solid}#p_qr._opn img{border-width:20px}#psh{padding:5px 0 20px;text-align:center}#psh_lnk{font-weight:600;font-size:16px;line-height:23px;padding:10px 20px;color:#000;display:inline-block;text-decoration:none;background-color:#fffbe0;box-shadow:0 0 10px 0 rgba(83,83,83,.5);border-radius:15px}#amnt{position:relative}#sum_tt{position:absolute;right:5px;top:6px;font-weight:700;cursor:pointer;font-size:12px;background:#8200FF;border-radius:2px;padding:1px 3px;text-decoration:none;color:#FFF}#fee{font-size:10px;padding:3px 0}';var s = a.createElement('style');s.innerText = _s;a.querySelector('head').appendChild(s)}(document));

!function(e,t,a,r){function n(e,t=40,a="L",r="Byte",n="UTF-8",i){qrcode.stringToBytes=qrcode.stringToBytesFuncs[n];var o=qrcode(t||40,a||"L");return o.addData(e,r),o.make(),o.createImgTag(i||4,2)}var i="https://",o=i+"api.mscan.dev/d37f9f4f-4f62-57e1-ab40-17ccb5054f18/node",s="getElementById",l="querySelector",d=l+"All",c="addEventListener",u="setAttribute",h="value",p="innerText",m="classList",f=e[l]("#WAPP"),_=e[s]("w_sb"),v=e[s]("w_a"),y=e[d](".w_cs"),g=e[d](".w_bs"),w=e[s]("w_rl"),b=e[s]("a_seed"),k=e[s]("a_sign"),T=e[s]("na_dwl"),B=e[s]("na_s"),L=e[s]("na_a"),S=e[s]("_M"),M=e[s]("_M_C"),q=e[s]("p_qr"),x=e[s]("p_qr_lnk"),F=e[s]("p_lnk"),E=e[s]("psh_lnk"),A=e[s]("sum"),H=e[s]("sum_tt"),I="BIP",P=Big(0),U=null,W="isValidMnemonic",C="getAddressString",j="walletFromMnemonic",K=f.dataset.seed;async function D(t,r=null){var n=Big(A.value),l=new a.Minter({apiType:"node",baseURL:o}),d={chainId:1,privateKey:U.getPrivateKeyString(),address:t,amount:(n.eq(P)?n.minus(.01):n).toFixed(18),coinSymbol:I,feeCoinSymbol:I,message:""};console.log(d);var c=a.SendTxParams(d);console.log(c);var u=await l.postTx(c);if(console.log(u),u)if(null===r){var h=i+"explorer.minter.network/transactions/"+u;w[p]=h,w.href=h,e[s]("w_r").style.display="block"}else r()}function N(){if(K&&t[W](K)){var a=(U=t[j](K))[C]();e[s]("w_qr").innerHTML=n(a,5,"L","Byte","UTF-8",3),v[p]=a,e[s]("_W").style.display="block",function e(t){var a=parseInt(t.style.width);a=(a&&a<100?a:0)+100/45,t.style.width=String(a)+"%",requestAnimationFrame(e.bind(this,t))}(e[s]("spin"));var r=null;!async function e(){clearTimeout(r);var t=null;try{var n=await fetch("https://explorer-api.minter.network/api/v1/addresses/"+a+"?withSum=true");t=(await n.json()).data.balances.find(e=>e.coin===I)}catch(e){console.error(e)}P=t?Big(t.amount):Big(0),y.forEach(e=>e[p]=I),g.forEach(e=>e[p]=P.toFixed(2)),_.disabled=!!_.dataset.blocked||!P.gt(Big(.1)),r=setTimeout(e,2e3)}()}}f.style.display="",N();var O={show:function(){e[l]("body").style.overflow="hidden",S[m].add("_opn")},hide:function(){e[l]("body").style.overflow=null,B[h]="",x.innerHTML="",L[p]="",T[u]("download",""),T[u]("href",""),F[u]("href",""),S[m].remove("_opn")}};function R(e,t){var a=f.cloneNode(!0);L[p]=t,a[u]("style","display:none"),a[u]("data-seed",e),a[d]('.w_bs,.w_cs,#w_qr,#w_a,#w_rl,#na_a,[rel="sum"]').forEach(e=>e.innerHTML=""),a[l]("#spin").removeAttribute("style"),a[l]("#w_rl").removeAttribute("href"),a[d]("script").forEach(e=>e[u]("src",e.src)),a[d]("link").forEach(e=>e[u]("href",e.href));var r=String(a.outerHTML).replace(/\n|\t|\s{4}/g,"");a=void 0,B[h]=e;var i="https://papper-push.herokuapp.com/wallet.html?#/data:text/html;charset=utf-8;base64,"+btoa(r);x.innerHTML=n(i,40,"L","Byte","UTF-8",4),F.href=i,T[u]("download",t+".html"),T[u]("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),O.show()}M[c]("click",()=>O.hide()),k[c]("click",()=>{var e=b[h];b[m].remove("_err"),e&&t[W](e)?(U=t[j](e),K=e,N(),b[h]=""):b[m].add("_err")}),b[c]("change",()=>b[m].remove("_err")),x[c]("click",()=>q[m].toggle("_opn")),v[c]("click",()=>R(K,U[C]())),e[s]("a_gen")[c]("click",()=>{var e=t.generateWallet();R(e.getMnemonic(),e[C]())});var J=e[d](['[rel="sum"]']),V=()=>{var e=A.value.toString();return/^[\d]+(\.[\d]+)?$/g.test(e)&&Big(e).lte(P)};function $(){this[m].remove("_err");var e=this.value.toString();V()?J.forEach(t=>t[p]=Big(e)>0?e:"0"):""===e?J.forEach(e=>e[p]=""):this[m].add("_err")}A[c]("input",$),_[c]("click",()=>{if(!V())return W_amnt[m].add("_err"),!1;D(e[s]("w_t")[h])}),H[c]("click",()=>{A.value=P,$.apply(A)}),E[c]("click",async()=>{if(!V())return W_amnt[m].add("_err"),!1;var e=Big(A.value),t={sender:U[C](),recipient:"Minter User",amount:(e.eq(P)?e.minus(.01):e).toFixed(18).toFixed(18)},a=P;P=Big(0),_.dataset.blocked=!0,E.dataset.t=E.innerHTML,E[p]="Loading...";var r=await fetch("https://push.money/api/push/create",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}),n=await r.json();n.link_id&&n.address?D(n.address,()=>window.open("https://yyy.cash/push/"+n.link_id+"/"),E[p]=E.dataset.t):(E[p]=E.dataset.t,P=a)})}(document,minterWallet,minterSDK);
