package es.riberamolinos.examfinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import es.riberamolinos.examfinal.dto.SaleDto;
import es.riberamolinos.examfinal.dto.SaleRequestDto;
import es.riberamolinos.examfinal.entity.Status;
import es.riberamolinos.examfinal.service.SaleService;
import io.swagger.v3.oas.annotations.Operation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ControllerRest {

    @Autowired
    private SaleService ss;

    @GetMapping("/get/all/sales")
    @Operation(summary = "Get all sales")
    public ResponseEntity<List<SaleDto>> salesList() {
        return ResponseEntity.ok(ss.salesList());
    }

    @PostMapping("/sale/new")
    @Operation(summary = "Create new sale")
    public ResponseEntity<SaleDto> getMethodName(@RequestParam SaleRequestDto sale) {
        return ResponseEntity.ok(ss.newSale(sale)) ;
    }
    
    @PostMapping("/sale/change/status")
    @Operation(summary = "Change de status")
    public void getMethodName(@RequestParam Long id, @RequestParam Status status) {
        ss.ChangeStatus(id, status);
    }

    @GetMapping("/get/all/sales/created")
    @Operation(summary = "Sales un paied")
    public ResponseEntity<List<SaleDto>> salesUnPaid() {
        return ResponseEntity.ok(ss.salesUnPaid());
    }
    


    
    
}