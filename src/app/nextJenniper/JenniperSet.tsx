import Script from "next/script";
export default function JenniperSet() {
	return (
		<>
			<Script>
				{`  
        if( ${process.env.developMode === "production"}){
          (function(j,ennifer) {
          j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
          j['dmnaid']=ennifer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
          }(window, 'db7eeee4'));
        }
       `}
			</Script>
			<Script
				src="https://d-collect.jennifersoft.com/db7eeee4/demian.js"
				type="text/javascript"
			></Script>
		</>
	);
}
