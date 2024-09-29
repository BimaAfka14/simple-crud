$(document).ready(function () {
  let currentRow = null;

  // Fungsi untuk membuka modal dan memunculkan data yang sudah ada (Edit)
  $(".edit-btn").click(function () {
    currentRow = $(this).closest("tr"); // Mendapatkan baris yang sedang diedit
    const nimValue = currentRow.find("td").eq(1).text(); // Mengambil nilai NIM
    const namaValue = currentRow.find("td").eq(2).text(); // Mengambil nilai Nama

    // Memasukkan nilai NIM dan Nama ke dalam input di modal
    $("#editNIM").val(nimValue);
    $("#editNama").val(namaValue);

    // Tampilkan modal
    $("#editModal").removeClass("hidden");
  });

  // Fungsi untuk menyimpan perubahan setelah tombol "Simpan Perubahan" diklik (Edit)
  $("#saveChanges").click(function () {
    const newNIM = $("#editNIM").val();
    const newNama = $("#editNama").val();

    // Update nilai di tabel
    currentRow.find("td").eq(1).text(newNIM);
    currentRow.find("td").eq(2).text(newNama);

    // Tutup modal
    $("#editModal").addClass("hidden");
  });

  // Fungsi untuk membatalkan perubahan dan menutup modal (Edit)
  $("#cancelEdit").click(function () {
    $("#editModal").addClass("hidden");
  });

  // Fungsi untuk menghapus data
  $(".delete-btn").click(function () {
    const row = $(this).closest("tr");
    Swal.fire({
      title: "Hapus data?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        row.remove();
        updateRowNumbers();
        Swal.fire("Data Berhasil Dihapus!", "", "success");
      }
    });
  });

  // Fungsi untuk mengupdate nomor urut setelah penghapusan
  function updateRowNumbers() {
    $("table tbody tr").each(function (index) {
      $(this)
        .find("td:first")
        .text(index + 1);
    });
  }

  // Fungsi untuk membuka modal Tambah Data
  $("#addDataBtn").click(function () {
    $("#addModal").removeClass("hidden");
  });

  // Fungsi untuk menyimpan data baru (Tambah Data)
  $("#saveAdd").click(function () {
    const newNIM = $("#addNIM").val();
    const newNama = $("#addNama").val();

    // Validasi input
    if (newNIM === "" || newNama === "") {
      Swal.fire("Error", "Harap masukkan NIM dan Nama!", "error");
      return;
    }

    // Tambahkan baris baru ke tabel
    const newRow = `
            <tr>
              <td class="border px-2 py-4">${
                $("table tbody tr").length + 1
              }</td>
              <td class="border px-2 py-4">${newNIM}</td>
              <td class="border px-2 py-4">${newNama}</td>
              <td class="border px-2 py-4">
                <div class="action-buttons">
                  <button class="edit-btn bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                  <button class="delete-btn bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
                </div>
              </td>
            </tr>
          `;

    $("table tbody").append(newRow);

    // Bersihkan input modal
    $("#addNIM").val("");
    $("#addNama").val("");

    // Sembunyikan modal Tambah Data
    $("#addModal").addClass("hidden");

    // Reattach event listeners for the new buttons (Edit & Delete)
    attachRowListeners();
  });

  // Fungsi untuk membatalkan proses tambah data dan menutup modal
  $("#cancelAdd").click(function () {
    $("#addModal").addClass("hidden");
  });

  // Fungsi untuk meng-attach ulang event listeners untuk tombol edit dan hapus
  function attachRowListeners() {
    $(".edit-btn")
      .off("click")
      .on("click", function () {
        currentRow = $(this).closest("tr");
        const nimValue = currentRow.find("td").eq(1).text();
        const namaValue = currentRow.find("td").eq(2).text();

        $("#editNIM").val(nimValue);
        $("#editNama").val(namaValue);
        $("#editModal").removeClass("hidden");
      });

    $(".delete-btn")
      .off("click")
      .on("click", function () {
        const row = $(this).closest("tr");
        Swal.fire({
          title: "Hapus data?",
          text: "Data yang dihapus tidak dapat dikembalikan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Hapus",
        }).then((result) => {
          if (result.isConfirmed) {
            row.remove();
            updateRowNumbers();
            Swal.fire("Data Berhasil Dihapus!", "", "success");
          }
        });
      });
  }

  // Attach event listeners saat halaman pertama kali dimuat
  attachRowListeners();
});
