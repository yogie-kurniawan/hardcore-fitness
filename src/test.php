

<!DOCTYPE html>
    
    <html>
    
    
    
    <?php
      include "../koneksi.php";
      include "../tglindo.php";
    
    $tgl = $_GET['tanggal'];
    
    if ($tgl == "") {
        echo "<script>window.location='../../index.php?page=lap_harian_kasir&action=view'</script>";
    }
    $kode = "and tb_laporan.id_user='$_SESSION[kode_user]'";
        $where = "where tb_laporan.id_user='$_SESSION[kode_user]' AND tb_laporan.tgl='$tgl'";
                                            $sql = mysql_query("SELECT * FROM tb_laporan left join tb_user on tb_laporan.id_user = tb_user.kode_user $where");
                                            $cek = mysql_num_rows($sql);
                                                $data = mysql_fetch_array($sql);
                                                $modal = mysql_fetch_assoc(mysql_query("SELECT * FROM tb_modal where tgl='$tgl' and id_user='$_SESSION[kode_user]'"));
    
    $biayaLain = mysql_fetch_assoc(mysql_query("SELECT sum(jumlah) as tot from tb_biayalainnya where date(tgl)='$tgl' and id_user='$_SESSION[kode_user]'"));
    $biayaLain = $biayaLain['tot'];
    $setoran = $data['cash'] - $biayaLain;
      ?>
      
      <head>
          <style>
          * {
              box-sizing: border-box;
              padding:0;
              margin:0;
          }
              table{
                  border-collapse: collapse;
              }
              
              table tr, table td {
                  padding: 5px;
                  font-size:0.5rem;
              }
          </style>
      </head>
      
     
      <!--<body>-->
       <body onLoad="javascript:print()"> 
    <font face="Arial, Verdana">
        <h3 style="text-align:center;font-weight:900;font-size:0.8rem">KAS KASIR</h3>
        <h5  style="text-align:center;font-weight:800;font-size:0.6rem"> <tr><?php echo TanggalIndo($data['tgl']); ?>
        <h6 style="text-align:center;font-weight:600;font-size:0.6rem">Kasir : <?= $data['nama_lengkap']?></h6>
    
        <div style="margin-top:30px">
            <table width="80%" border="1">
        <tbody id="modal">
                                            <?php
                                            $no = 1;
                                            if ($cek < 1) {
                                            ?>
                                                <tr>
                                                    <td colspan="7" class="p-3">Data tidak ditemukan</td>
                                                </tr>
                                                <?php
                                            } else {
                                                ?>
                                                    
                            
                                <tr>
                              <td colspan=2>Saldo Awal | | 
                              </td>
                            </tr>
                            
                                <tr style="border-width:2px">
                              <td colspan=2 style="font-weight:800;text-align:center;font-size:0.6rem">PEMASUKAN KAS
                              </td>
                            </tr>
                                                    <tr>
                              <td width="80" style="text-align:left">Modal Kasir
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($modal['modal']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="80" style="text-align:left">Uang Laci
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['laci']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan Tunai
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['cash']); ?>
                              </td>
                            </tr>
                            <tr>
                              <td width="100" style="text-align:left">
                                Biaya Lain
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($biayaLain); ?>
                              </td>
                            </tr>
                             <tr>
                              <td width="100" style="text-align:left">
                                Setoran Tunai
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($setoran); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan BRI
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['bri']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                               Penjualan BCA
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['bca']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan BNI
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['bni']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan BSI
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['bsi']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan Mandiri
                              </td>
                              <td style="text-align:right">
                                <?php echo number_format($data['mandiri']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="100" style="text-align:left">
                                Penjualan Nagari
                              </td>
                              <td text-align="left">
                                <?php echo number_format($data['nagari']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="150" style="text-align:left">
                                Penjualan Online
                              </td>
                              <td text-align="lef0">
                                <?php echo number_format($data['online']); ?>
                              </td>
                            </tr>
                                                    <tr>
                              <td width="150">
                                Hutang
                              </td>
                              <td>
                                <?php echo number_format($data['hutang']); ?>
                              </td>
                            </tr>
                                                        <td><?php echo $data['ket']; ?></td>
                                                    </tr>
                                            <?php
                                                }
                                            ?>
                                        </tbody>
        </table>
        </div>
    
    
    </font>
    </body>
    
        </html>