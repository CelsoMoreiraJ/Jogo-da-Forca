var biblioteca = ["Naruto", "Folha", "Lua", "Casa", "Fogo", "Borracha", "Corda", "Policia", "Lasanha","Chuva", "Livro"];
            var qtde = biblioteca.length - 1;
            var pos = Math.round(Math.random() * qtde);
            var palavra = biblioteca[pos];
            var tam = palavra.length;
            var cxLetras = [];
            var acertos;
            var errosMax = 7;
            var erros = 0;
            var acertou = false;
            var jogando = false;
            var jog;
            function define(length) {
                for (var i = 0; i < 12; i++) {
                    document.getElementById("l" + i).value = "";
                    document.getElementById("l" + i).style.display = "none";
                }
                for (var i = 0; i < length; i++) {
                    document.getElementById("l" + i).style.display = "inline-block";
                }
            }
            function jogar() {
                jog.focus();
                if (jog.value != "") {
                    if (jogando) {
                        var obj;
                        var letraTam;
                        var l;
                        var pesq;
                        l = jog.value;
                        jog.value = "";
                        pesq = palavra.match(l);
                        acertou = false;
                    }
                }
            }

            function inicia() {
                document.getElementById("dvmsg").innerHTML = "";
                jogando = true;
                jog = document.getElementById(this.);
                jog.value = "";
                jog.focus();
                acertos = 0;
                erros = 0;
                acertou = false;
                document.getElementById("dvletrasdigitadas").innerHTML = "Letras digitadas: ";
                pos = Math.round(Math.random() * qtde);
                palavra = biblioteca[pos];
                tam = palavra.length;
                define(tam);
                document.getElementById("img").src = "1.png";
            }
            
            function comecar(){
                document.getElementById("btcomecar");
                
                inicia();
                jogar();
                window.onload = inicia();
            }