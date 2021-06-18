function FadeIn(thisCon,ClientMargin) {
	var ClientTop = thisCon.getBoundingClientRect().top;
	
 if(thisCon.getBoundingClientRect) {
	 
	 if (ClientTop - window.innerHeight >= window.scrollY) {
	 thisCon.style.opacity = "0";
	 }
	 
	 function Fading() {
		 if (ClientTop - window.innerHeight + ClientMargin <= window.scrollY) {
			 	 thisCon.style.transition = "all 2s";
			 thisCon.style.opacity = "1";
			 document.removeEventListener("scroll",Fading);
		 }
		 
		 else {
		 }
	}
	
    document.addEventListener("scroll",Fading);
	
 }
 
 
 
}


var FadeClass = document.getElementsByClassName("FadeScript");
if (FadeClass.length >= 1) {
	

for (c=0;c<FadeClass.length;c++) {
	FadeIn(FadeClass[c],0);
}

}





