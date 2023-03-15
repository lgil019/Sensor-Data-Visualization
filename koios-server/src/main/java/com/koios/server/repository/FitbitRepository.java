package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koios.server.model.FitbitHistory;

public interface FitbitRepository extends JpaRepository<FitbitHistory, Long> {

    public FitbitHistory findDataById(Integer enrollmentId);
}
