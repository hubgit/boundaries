Source: https://geoportal.statistics.gov.uk/geoportal/catalog/content/filelist.page

Boundaries: Census_area_statistics_wards_(E+W)_Jan_2003_Boundaries_(Generalised_Clipped).zip

https://geoportal.statistics.gov.uk/Docs/Boundaries/Census_area_statistics_wards_(E+W)_Jan_2003_Boundaries_(Generalised_Clipped).zip

http://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/

    brew install gdal
    ID=CMWD_2011_EW_BGC
    ogr2ogr -f GeoJSON -t_srs crs:84 $ID.geojson $ID.shp