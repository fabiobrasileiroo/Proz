CREATE OR REPLACE FUNCTION LevantamentoDiario()
RETURNS TABLE (Dia DATE, QuantidadeTotal INT)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        data_compra::DATE AS Dia,
        SUM(quantidade) AS QuantidadeTotal
    FROM 
        vendas
    GROUP BY 
        data_compra::DATE;
END;
$$ LANGUAGE plpgsql;
