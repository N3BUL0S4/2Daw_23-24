package es.riberamolinos.examfinal.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.RequestEntity.HeadersBuilder;
import org.springframework.stereotype.Service;

import es.riberamolinos.examfinal.dto.SaleDto;
import es.riberamolinos.examfinal.dto.SaleRequestDto;
import es.riberamolinos.examfinal.entity.CarEntity;
import es.riberamolinos.examfinal.entity.SaleEntity;
import es.riberamolinos.examfinal.entity.SellerEntity;
import es.riberamolinos.examfinal.entity.Status;
import es.riberamolinos.examfinal.mapper.SaleMapper;
import es.riberamolinos.examfinal.repository.SaleRepository;

@Service
public class SaleService {

    @Autowired
    private SaleMapper sm;
    
    @Autowired
    private SaleRepository sr;
    
    public List<SaleDto> salesList() {
        return sm.toSales(sr.findAll());
    }

    public SaleDto newSale(SaleRequestDto sale) {
        SaleEntity se= new SaleEntity();
        se.setStatus(sale.getStatus());
        se.setDate(LocalDate.now());
        se.setClientId(sale.getClientId());
        se.setCar(CarEntity.builder().id(sale.getCar()).build());
        se.setSeller(SellerEntity.builder().id(sale.getSeller()).build());
        return sm.toSale(sr.save(se));
    }

    public void ChangeStatus(Long id, Status status) {
        SaleEntity se = sr.findById(id).get();
        if (se == null) return;
        if (!se.getStatus().equals(Status.CREATED)) return ;        
        se.setStatus(status);
        return;

    }

    public List<SaleDto> salesUnPaid() {
            List<SaleDto> sales = sm.toSales(sr.findAll());
            List<SaleDto> saleList = new ArrayList();
        for (SaleDto s : sales) {
            if (s.getStatus().equals(Status.CREATED)) {
                saleList.add(s);
            }
        }
        return saleList;
    }

    public void deleteSales() {
        for (SaleDto sale : sm.toSales(sr.findAll())) {
            if (sale.getStatus().equals(Status.CANCELLED)) {
                sr.deleteById(sale.getId());
            }
        }
    }
}
