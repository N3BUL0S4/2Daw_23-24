package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.demo.dto.Cuenta;
import com.example.demo.entitys.CuentaEntity;

@Mapper(componentModel = "spring")
public interface CuentaMapper {

    Cuenta toCuenta(CuentaEntity cuenta);
    CuentaEntity toCuentaEntity(Cuenta cuenta);
    List<Cuenta> toCuentas(List<CuentaEntity> cuentas);
    List<CuentaEntity> toCuentaEntitys (List<Cuenta> cuentas); 
    
}