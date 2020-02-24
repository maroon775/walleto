;(function(a){var _s = '*{box-sizing:border-box}body{margin:0;padding:0;background:#444}#WAPP{font-family:Arial;margin:10px 0}#_W{display:none}#w,.acts{width:320px;margin:0 auto;border-radius:4px;color:#FFF;line-height:20px;font-size:14px;padding:15px;position:relative;overflow:hidden;box-shadow:0 0 15px 0 rgba(0,0,0,.25)}#w{background:#8200FF}.w_qr{text-align:center}.w_qr img{overflow:hidden;border-radius:6px;box-shadow:0 0 10px 0 rgba(60,60,60,.2)}.w_b{font-size:17px;line-height:34px;text-shadow:0 0 1px #FFF;background:#460186;margin:0 -15px 10px;padding:0 15px}.w_i{margin:15px 0 0}#na_a,#w_a{border-radius:2px;padding:5px 4px;font-size:11px;display:block;max-width:100%;text-align:center;box-shadow:0 0 10px 0 rgba(83,83,83,.5);color:#60007A;margin-top:4px;text-decoration:underline;font-weight:700;background:#FFF}#w_a:hover{text-decoration:none;background:rgba(255,255,255,.94)}#na_a{text-decoration:none;padding:5px 4px;max-width:100%;margin:0 0 10px;box-shadow:none;border:1px solid #DCDCDC}#spin{height:4px;background:#460186;position:absolute;left:0;bottom:0}#w_s{margin-top:30px;background:#FFF;border-radius:3px;padding:20px;color:#333;box-shadow:0 0 10px 0 rgba(83,83,83,.5)}#w_s .w_s_l,.a_title{text-align:center;display:block;margin-bottom:10px;font-weight:700}.ta,.text{display:block;border-radius:3px;height:34px;font-size:13px;border:2px solid #8200FF;width:100%;padding:8px 2px;color:#333;margin-bottom:10px}.ta{height:auto;resize:none;padding:5px}.text._err{border-color:#FF564D}.btn{display:block;border-radius:3px;text-align:center;width:100%;padding:10px 20px;border:2px solid #8200FF;font-weight:700;transition:all .3s;background:#8200FF;color:#FFF;text-decoration:none}.btn[disabled]{opacity:.7;cursor:not-allowed}.btn:not([disabled]):hover{background:#FFF;cursor:pointer;color:#333}.acts{background:#FAFAFA;overflow:hidden;color:#333}.dd{width:100%;max-width:300px;margin:20px auto;text-align:center;position:relative}.dd::before,.dd::after{content:\'\';display:block;position:absolute;border-top:1px solid #333;top:50%;width:40%}.dd::after{right:0}.mw{font-size:13px;position:fixed;background:rgba(0,0,0,.5);left:0;bottom:0;width:100%;min-height:100%;overflow:auto;overflow-x:hidden;z-index:100;display:none}.mw._opn{display:block}.mw-o{position:absolute;top:0;left:0;width:100%;overflow:auto}.mw-m{background:#FFF;min-width:310px;max-width:400px;margin:30px auto;z-index:101;border-radius:4px;border-top:10px solid #8200FF;position:relative}.mw-h{border-bottom:1px solid #CCC;padding:10px 15px;margin:0 0 15px}.mw-b{padding:0 15px}.mw-f{padding:0 15px 15px}.mw-c{position:absolute;background:#8200FF;color:#FFF;text-align:center;display:block;width:30px;height:30px;line-height:32px;border-radius:30px;right:-15px;top:-20px;overflow:hidden;text-decoration:none;font-family:serif;font-size:15px;font-weight:100}.mw-c:after{content:\' \\2715\'}#w_r{background:#DFFFE7;color:#000;margin:10px 0 0;border-radius:4px;padding:20px;display:none;overflow:hidden}#w_rl{display:inline-block;overflow:hidden;max-width:100%;text-overflow:ellipsis}#p_qr._opn{position:fixed;left:50%;width:450px;max-width:100%;top:30px;transform:translateX(-50%);z-index:102}#p_qr_label{font-size:12px;display:block;margin:0 0 5px 0}#p_qr img{height:auto;max-width:100%;margin:0 0 5px;border:10px #FFF solid}#p_qr._opn img{border-width:20px}#psh{padding:15px 0 10px;text-align:center}#psh_lnk{font-weight:600;font-size:16px;line-height:20px;padding:10px 20px;color:#000;display:inline-block;text-decoration:none;background-color:#F4F3ED;-webkit-box-shadow:-2px -2px 15px hsla(0,0%,100%,.8),2px 15px 25px rgba(0,0,0,.1);box-shadow:-2px -2px 15px hsla(0,0%,100%,.8),2px 15px 25px rgba(0,0,0,.1);border-radius:15px;height:40px}';var s = a.createElement('style');s.innerText = _s;a.querySelector('head').appendChild(s)}(document));

;(function(d, _mw, _ms, t) {

    function qr(text, typeNumber = 40, errorCorrectionLevel = 'L', mode = 'Byte', mb = 'UTF-8', size) {

        qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];

        var q = qrcode(typeNumber || 40, errorCorrectionLevel || 'L');
        q.addData(text, mode);
        q.make();
        return q.createImgTag(size || 4, 2);
    }

    var h         = 'https://',
        apiUrl    = h + 'api.mscan.dev/d37f9f4f-4f62-57e1-ab40-17ccb5054f18/node',
        _ge       = 'getElementById',
        _qs       = 'querySelector',
        _qsa      = _qs + 'All',
        _adel     = 'addEventListener',
        _sa       = 'setAttribute',
        _v        = 'value',
        _it       = 'innerText',
        _cl       = 'classList',
        _WA       = d[_qs](t),
        _W_SB     = d[_ge]('w_sb'),
        _W_a      = d[_ge]('w_a'),
        _W_cs     = d[_qsa]('.w_cs'),
        _W_bs     = d[_qsa]('.w_bs'),
        _W_rl     = d[_ge]('w_rl'),
        _A_seed   = d[_ge]('a_seed'),
        _A_sign   = d[_ge]('a_sign'),
        _N_dwl    = d[_ge]('na_dwl'),
        _N_s      = d[_ge]('na_s'),
        _N_a      = d[_ge]('na_a'),
        _M        = d[_ge]('_M'),
        _M_C      = d[_ge]('_M_C'),
        _P_qr     = d[_ge]('p_qr'),
        _P_qr_lnk = d[_ge]('p_qr_lnk'),
        _P_lnk    = d[_ge]('p_lnk'),
        _PushLnk    = d[_ge]('psh_lnk'),
        COIN      = 'BIP',
        BLNC      = 0,
        W         = null,
        _ivm      = 'isValidMnemonic',
        _gas      = 'getAddressString',
        _wfm      = 'walletFromMnemonic',
        SEED      = _WA.dataset.seed;

    _WA.style.display = '';

    async function transfer(addr, cb = null) {
        var sdk = new _ms.Minter({
            apiType: 'node',
            baseURL: apiUrl,
        });
        var txParams = {
            chainId: 1,
            privateKey: W.getPrivateKeyString(),
            address: addr,
            amount: BLNC - 0.010000000000000400,
            coinSymbol: COIN,
            feeCoinSymbol: COIN,
            message: ''
        };
        console.log(txParams);
        var ttx = _ms.SendTxParams(txParams);
        console.log(ttx);
        var tx = await sdk.postTx(ttx);
        console.log(tx);
        if(tx) {
            if(cb === null) {
                var link = h + 'explorer.minter.network/transactions/' + tx;
                _W_rl[_it] = link;
                _W_rl.href = link;
                d[_ge]('w_r').style.display = 'block';
            }
            else {
                cb();
            }
        }
    }

    function _wallet() {
        if(SEED && _mw[_ivm](SEED)) {
            W = _mw[_wfm](SEED);
            var addr = W[_gas]();

            d[_ge]('w_qr').innerHTML = qr(addr, 5, 'L', 'Byte', 'UTF-8', 3);
            _W_a[_it] = addr;
            d[_ge]('_W').style.display = 'block';

            _W_SB[_adel]('click', () => transfer(d[_ge]('w_t')[_v]));

            function _spin(s) {
                var w = parseInt(s.style.width);
                w = (w && w < 100 ? w : 0) + (100 / 45);
                s.style.width = String(w) + '%';
                requestAnimationFrame(_spin.bind(this, s));
            }

            _spin(d[_ge]('spin'));

            var tmr = null;

            async function _balance() {
                clearTimeout(tmr);
                try {
                    var r = await fetch(apiUrl + '/address?address=' + addr);
                    var d = await r.json();
                    BLNC = parseFloat(d['result']['balance'][COIN]) / Math.pow(10, 18);

                    _W_cs.forEach(i => i[_it] = COIN);
                    _W_bs.forEach(i => i[_it] = BLNC);
                    _W_SB.disabled =  _W_SB.dataset.blocked ? true : !(BLNC > 0.01);
                } catch (err) {

                }

                tmr = setTimeout(_balance, 1000);
            }

            _balance();
        }
    }

    _wallet();

    var _WIN = {
        show: function() {
            d[_qs]('body').style.overflow = 'hidden';
            _M[_cl].add('_opn');
        },
        hide: function() {
            d[_qs]('body').style.overflow = null;
            _N_s[_v] = '';
            _P_qr_lnk.innerHTML = '';
            _N_a.innerText = '';
            _N_dwl[_sa]('download', '');
            _N_dwl[_sa]('href', '');
            _P_lnk[_sa]('href', '');
            _M[_cl].remove('_opn');
        }
    };

    function oApp(seed, addr) {
        var clone = _WA.cloneNode(true);
        _N_a.innerText = addr;
        clone[_sa]('style', 'display:none');
        clone[_sa]('data-seed', seed);
        clone[_qsa]('.w_bs,.w_cs,#w_qr,#w_a,#w_rl,#na_a').forEach(i => i.innerHTML = '');
        clone[_qqs]('#spin').removeAttribute('style');
        clone[_qqs]('#w_rl').removeAttribute('href');
        clone[_qsa]('script').forEach(i => i[_sa]('src', i.src));
        clone[_qsa]('link').forEach(i => i[_sa]('href', i.href));
        
        var html = String(clone.outerHTML).replace(/\n|\t|\s{4}/g, '');
        clone = undefined;
        _N_s[_v] = seed;

        var docurl = 'https://papper-push.herokuapp.com/wallet.html?#/data:text/html;charset=utf-8;base64,' + btoa(html);

        _P_qr_lnk.innerHTML = qr(docurl, 40, 'L', 'Byte', 'UTF-8', 4);
        _P_lnk.href = docurl;

        _N_dwl[_sa]('download', addr + '.html');
        _N_dwl[_sa]('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
        _WIN.show();
    }

    _M_C[_adel]('click', () => _WIN.hide());

    _A_sign[_adel]('click', () => {
        var s = _A_seed[_v];
        _A_seed[_cl].remove('_err');
        if(s && _mw[_ivm](s)) {
            W = _mw[_wfm](s);
            SEED = s;
            _wallet();
            _A_seed[_v] = '';
        }
        else {
            _A_seed[_cl].add('_err');
        }
    });

    _A_seed[_adel]('change', () => _A_seed[_cl].remove('_err'));

    _P_qr_lnk[_adel]('click', () => _P_qr[_cl].toggle('_opn'));

    _W_a[_adel]('click', () => {
        oApp(SEED, W[_gas]());
    });

    d[_ge]('a_gen')[_adel]('click', () => {
        var nw = _mw.generateWallet();
        oApp(nw.getMnemonic(), nw[_gas]());
    });

    _PushLnk[_adel]('click', async () => {
        var push = {
            sender: W[_gas](),
            recipient: 'Minter User',
            amount: BLNC - 0.010000000000000400
        };
        var temp = BLNC;
        BLNC = 0;
        _W_SB.dataset.blocked = true;
        _PushLnk.innerText = _PushLnk.dataset.l;
        var req = await fetch('https://push.money/api/push/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(push)
        });
        var res = await req.json();
        if(res.link_id && res.address) {
            transfer(res.address, () => {
                window.location.href = 'https://yyy.cash/push/' + res.link_id + '/';
            });
        } else {

            _PushLnk.innerText = _PushLnk.dataset.t;
            BLNC = temp;
        }

    });
})(document, minterWallet, minterSDK, '#WAPP');
