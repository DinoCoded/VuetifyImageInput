!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],e):t.VuetifyImageInput=e(t.PaperDuck)}(this,function(i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;var t={clearable:{type:Boolean,default:!1},flipHorizontallyText:{type:[Function,String],default:"flip horizontally"},flipVerticallyText:{type:[Function,String],default:"flip vertically"},hideActions:{type:Boolean,default:!1},imageEncoderOptions:{},imageHeight:{type:Number,default:256},imageType:{type:String,default:"png"},imageWidth:{type:Number,default:256},notFlippable:{type:Boolean,default:!1},rotateClockwiseText:{type:[Function,String],default:"rotate clockwise"},rotateCounterclockwiseText:{type:[Function,String],default:"rotate counterclockwise"},value:String};var e={image:{get:function(){return this.lazyImage},set:function(t){this.lazyImage=t,this.$emit("input",this.internalValue)}},internalValue:function(){return this.image?this.image.toDataURL("image/"+this.imageType,this.imageEncoderOptions):null}},a={value:{handler:function(t){this.internalValue!==t&&(this.lazyImage=i.from(t))},immediate:!0}};function n(){}var o={clear:function(){this.image=null},flipHorizontally:function(){this.image=this.image.flop()},flipVertically:function(){this.image=this.image.flip()},rotateClockwise:function(){this.image=this.image.rotate90()},rotateCounterclockwise:function(){this.image=this.image.rotate270()},upload:function(){var e=this,t=document.createElement("input");t.type="file",t.addEventListener("change",function(){i.load(t).then(function(t){e.image=t.scaleMin(e.imageWidth,e.imageHeight)}).catch(n)}),t.click()}},T="url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"')";var r={name:"VImageInput",props:t,data:function(){return{lazyImage:void 0}},computed:e,watch:a,methods:o,render:function(t){var e=this,i=e.clearable,a=e.image,n=e.imageHeight,o=e.imageWidth,r=e.hideActions;if(a){var l=t("img",{attrs:{src:a.toDataURL()}}),c=[];if(i){var p=this.clear,s=t("v-icon","clear");s=t("v-btn",{props:{flat:!0,icon:!0},on:{click:p}},[s]);var u=t("v-spacer");c.push(s,u)}if(!r){var d=this,f=d.flipHorizontally,g=d.flipHorizontallyText,h=d.flipVertically,m=d.flipVerticallyText,y=d.rotateClockwise,v=d.rotateClockwiseText,w=d.rotateCounterclockwise,x=d.rotateCounterclockwiseText,b=t("v-icon",{style:{transform:"rotate(180deg)"}},"flip");b=t("v-tooltip",{props:{right:!0}},[b=t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:f}},[b]),t("span",g)]);var k=t("v-icon",{style:{transform:"rotate(90deg)"}},"flip");k=t("v-tooltip",{props:{right:!0}},[k=t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:h}},[k]),t("span",m)]),c.push(b,k);var C=t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:y}},[C=t("v-icon",{style:{transform:"rotate(180deg)"}},"rotate_90_degrees_ccw")]);C=t("v-tooltip",{props:{right:!0}},[C,t("span",v)]);var I=t("v-icon","rotate_90_degrees_ccw");I=t("v-tooltip",{props:{right:!0}},[I=t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:w}},[I]),t("span",x)]),c.push(C,I)}if(0<c.length){var V=t("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center"}},c);return t("div",{style:{display:"inline"}},[t("div",{style:{display:"flex"}},[t("div",{style:{alignItems:"center",backgroundImage:T,backgroundRepeat:"repeat",backgroundSize:"16px 16px",display:"flex",height:n+"px",justifyContent:"center",width:o+"px"}},[l]),V])])}return l}var z=t("v-icon","cloud_upload");return t("div",{style:{alignItems:"center",backgroundColor:"#eeeeee",border:"1px dashed #bdbdbd",borderRadius:"8px",display:"inline-flex",height:n+"px",justifyContent:"center",width:o+"px"}},[t("v-btn",{props:{color:"primary",fab:!0,large:!0},on:{click:this.upload}},[z])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(r.name,r),r});
