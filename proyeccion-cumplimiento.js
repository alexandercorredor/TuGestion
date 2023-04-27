    $(document).ready(function () {

        $('#ProyeccionCumplimiento').DataTable({
          language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json"
          },
          dom: 'Bfrtip',
          "pageLength": 10,
      
          buttons: [
            {
              extend: 'excelHtml5',
              text: '<i class="bi bi-file-excel"></i>',
              titleAttr: 'Excel',
              className: 'btn btn-success mb-2'
            },
      
            {
              extend: 'pdfHtml5',
              text: '<i class="fa fa-file-pdf-o"></i>',
              titleAttr: 'PDF',
              className: 'btn btn-danger mb-2 ms-2',
              orientation: 'landscape',
              pageSize: 'LETTER'
            }
          ]
        });
      });