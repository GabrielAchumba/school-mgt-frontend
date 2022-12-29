<template>
    <div class="q-pa-sm">
        <q-btn flat dense round icon="print" aria-label="PDF" @click="generatePDF"/>

        <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        :filename="getFileName"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        :pdf-margin="10"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        @progress="onProgress($event)"
        ref="html2Pdf"
        >
        <section slot="pdf-content">
            <ContentToPrint/>
        </section>
        </vue-html2pdf>

        <!-- <div id="element-to-convert">
            <center>
                <ContentToPrint/>
            </center>
        </div> -->
    </div>
</template>

<script>
/* import html2pdf from "html2pdf.js"; */
import VueHtml2pdf from "vue-html2pdf";
import ContentToPrint from "./content-to-print.vue"
import { printableRoutes } from "./printable-routes";
//picture_as_pdf

export default {
computed:{
    getFileName(){
        try{
            const activeRoute = this.$store.getters["authenticationStore/activeRoute"];
            console.log("fileName: ", printableRoutes[activeRoute].fileName);
            return printableRoutes[activeRoute].fileName == undefined ? "file1" : printableRoutes[activeRoute].fileName;
        }catch(e){
            return "file1";
        }
        
    }
},
components:{
    ContentToPrint,
    VueHtml2pdf,
},
methods:{
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
      console.log("current route: ", this.$router.history.current.fullPath)
    },
    /* exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 1,
  			filename: "i-was-html.pdf",
			});
    }, */
}
}
</script>