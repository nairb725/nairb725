function setCookie(nom, valeur, expire, chemin, domaine, securite){
     document.cookie = nom + ' = ' + escape(valeur) + '  ' +
               ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
               ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
               ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
               ((securite == true) ? '; secure' : '');