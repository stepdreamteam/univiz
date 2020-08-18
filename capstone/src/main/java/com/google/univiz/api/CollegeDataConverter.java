package com.google.univiz.api;

import com.google.common.base.Converter;
import com.google.univiz.CollegeData;

final class CollegeDataConverter extends Converter<CollegeData, MapsData> {

  @Override
  protected MapsData doForward(CollegeData college) {
    MapsData mapData =
        MapsData.builder()
            .setName(college.name())
            .setCity(college.city())
            .setIsMainCampus(college.isMainCampus())
            .setLatitude(college.latitude())
            .setLongitude(college.longitude())
            .build();
    return mapData;
  }

  @Override
  protected CollegeData doBackward(MapsData mapData) {
    throw new UnsupportedOperationException();
  }
}
