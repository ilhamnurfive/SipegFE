<template>
  <div class="px-2 py-4 px-3 overflow-auto bg-white" style="font-family: Arial;color: #000">
    <div style="text-align: center;">
      <img src="@/assets/Letter/Pancasila.jpeg" width="8%" alt />
      <h5
        class="mt-1"
        style="font-weight: bold; font-size: 130%; margin-bottom: -5px; color: #000"
      >BADAN KEPEGAWAIAN NEGARA</h5>
    </div>
    <hr style="border: 1px solid black" />
    <table style="font-size: 13px" width="100%" height="94" border="0">
      <tbody>
        <tr>
          <td width="81" height="23">&nbsp;Nomor</td>
          <td width="17">&nbsp;:</td>
          <td width="387">&nbsp;UP.2/413.a/2020</td>
          <td width="38">&nbsp;</td>
          <td width="629">Jakarta, 20 April 2020</td>
        </tr>
        <tr>
          <td height="18">&nbsp;Sifat</td>
          <td>&nbsp;:</td>
          <td>&nbsp;Penting</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td height="18">&nbsp;Lampiran</td>
          <td>&nbsp;:</td>
          <td>&nbsp;-</td>
          <td>&nbsp;</td>
          <td>Kepada</td>
        </tr>
        <tr>
          <td height="18">&nbsp;Perihal&nbsp;</td>
          <td>&nbsp;:</td>
          <td>&nbsp;Kenaikan Gaji Berkala</td>
          <td>&nbsp;Yth.</td>
          <td>Kepala Kantor Pelayanan Perbendaharaan Negara Bogor</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>di</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <strong>&nbsp; &nbsp; Bogor</strong>
          </td>
        </tr>
      </tbody>
    </table>

    <table style="margin-top: 20px; font-size: 13px" width="100%" border="0">
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dengan ini diberitahukan, bahwa berhubung dengan telah terpenuhinya masa kerja dan syarat-syarat lainnya kepada :</td>
        </tr>
        <tr>
          <td width="110">&nbsp;</td>
          <td width="812">
            <table style="font-size: 13px" width="100%" height="432" border="0">
              <tbody>
                <tr>
                  <td height="30">1.</td>
                  <td>Nama</td>
                  <td>&nbsp;:</td>
                  <td>{{dataPegawai.nama_pegawai}}</td>
                </tr>
                <tr>
                  <td height="30">2.&nbsp;</td>
                  <td>NIP&nbsp;</td>
                  <td>&nbsp;:</td>
                  <td>{{dataPegawai.nip}}&nbsp;</td>
                </tr>
                <tr>
                  <td height="30">3.&nbsp;</td>
                  <td>Pangkat/jabatan&nbsp;</td>
                  <td>&nbsp;:</td>
                  <td>{{dataPegawai.jabatan.jabatan ? dataPegawai.jabatan.jabatan : '-' }}&nbsp;</td>
                </tr>
                <tr>
                  <td height="30">4.&nbsp;</td>
                  <td>Kantor/tempat&nbsp;</td>
                  <td>&nbsp;:</td>
                  <td>{{'-'}}</td>
                </tr>
                <tr>
                  <td height="30">5.&nbsp;</td>
                  <td>Gaji pokok lama</td>
                  <td>&nbsp;:</td>
                  <td>Rp.3.953.600&nbsp;</td>
                </tr>
                <tr>
                  <td height="30">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td
                    style="font-style: italic;"
                  >&nbsp;(tiga juta sembilan ratus dua belas ribu enam ratus rupiah)</td>
                </tr>
                <tr>
                  <td height="30">&nbsp;</td>
                  <td
                    colspan="3"
                  >atas dasar surat keputusan terakhir tentang gaji/pangkat yang ditetapkan</td>
                </tr>
                <tr>
                  <td height="30">&nbsp;</td>
                  <td>a.&nbsp; &nbsp;oleh penjabat</td>
                  <td>&nbsp;:</td>
                  <td>Kepala Badan Kepegawaian Negara</td>
                </tr>
                <tr>
                  <td height="30">&nbsp;</td>
                  <td>b.&nbsp; &nbsp;tanggal</td>
                  <td>&nbsp;:</td>
                  <td>10 September 2018</td>
                </tr>
                <tr>
                  <td width="30" height="18">&nbsp;</td>
                  <td width="253">&nbsp; &nbsp; &nbsp; nomor</td>
                  <td width="15">&nbsp;:</td>
                  <td width="417">UP.1/92/2018</td>
                </tr>
                <tr>
                  <td height="18">&nbsp;</td>
                  <td>c.&nbsp; &nbsp;tanggal mulai berlakunya gaji tersebut</td>
                  <td>&nbsp;:</td>
                  <td>01 Oktober 2018</td>
                </tr>
                <tr>
                  <td height="18">&nbsp;</td>
                  <td>d.&nbsp; &nbsp;masa kerja golongan pada tanggal tersebut</td>
                  <td>&nbsp;:</td>
                  <td>22 tahun 07 bulan</td>
                </tr>
                <tr>
                  <td height="18">&nbsp;</td>
                  <td colspan="3">diberikan kenaikan gaji berkala hingga memperoleh :</td>
                </tr>
                <tr>
                  <td height="18">6.</td>
                  <td>Gaji Pokok baru</td>
                  <td>&nbsp;:</td>
                  <td>{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dataPegawai.gapok)}}</td>
                </tr>
                <tr>
                  <td height="18">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td style="font-style: italic;">&nbsp;</td>
                </tr>
                <tr>
                  <td height="18">&nbsp;</td>
                  <td>Berdasarkan masa kerja &nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table style="font-size: 13px" width="100%" height="298" border="0">
      <tbody>
        <tr>
          <td width="23" height="18">&nbsp;</td>
          <td width="385">&nbsp;</td>
          <td width="432" style="text-align: center">&nbsp;A.n. KEPALA</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td style="text-align: center">&nbsp;BADAN KEPEGAWAIAN NEGARA</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td style="text-align: center">&nbsp;SEKRETARIS UTAMA</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td style="text-align: center">&nbsp;u.b</td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td>&nbsp;</td>
          <td style="text-align: center">&nbsp;KEPALA BAGIAN MUTASI KEPEGAWAIAN</td>
        </tr>
        <tr>
          <td height="74">&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td height="18" colspan="2">TEMBUSAN surat ini disampaikan kepada</td>
          <td style="text-align: center">&nbsp;Dra. SAMSIANA SAPPARI, M.Adm.SDA.</td>
        </tr>
        <tr>
          <td height="18">1.&nbsp;</td>
          <td>Ketua Badan Pemeriksa Keuangan;&nbsp;</td>
          <td style="text-align: center">NIP. 196808101995112001&nbsp;</td>
        </tr>

        <tr>
          <td height="18">2.</td>
          <td>Pegawai yang bersangkutan;&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td height="18">3.&nbsp;</td>
          <td>Pertinggal.&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataPegawai: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>